/* 
this file is loaded into the index.html of the outer frame, which gives
us access for certain actions out of the sandbox
*/

const CLIENT_ID = '427e8320137ceca41834'

function stringToArrayBuffer(str) {
    // https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String

    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function sendToThingiverse(event) {
    if (window.DEBUG_THINGIVERSE) console.log("sendToThingiverse")

    if (window.localStorage.getItem("thingiverse_access_token") === null) {
        window.open('https://www.thingiverse.com/login/oauth/authorize?client_id=' + CLIENT_ID + '&redirect_uri=' + window.location.href, "_self")
    }
    else {
        
        if (event.data.arrayBuffer) {
            uploadToThingiverse(
                {buffer: event.data.arrayBuffer, 
                 name: event.data.name || "My BuildBee MakeCode Project",
                 pngArrayBuffer: stringToArrayBuffer(event.data.imageData)
                })
        }
    }
}

function authorizeThingiverse(event) {
    if (window.DEBUG_THINGIVERSE) console.log("authorizeThingiverse")
    const code = event.data.code
    if (code)
        fetch("https://relay.buildbee.com/authorizeThingiverse", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                "code": code
            })
        })
        .then(response => {
            response.json().then(function(data){
                if (data.access_token) {
                    window.localStorage.setItem("thingiverse_access_token", data.access_token)
                    sendToThingiverse(event)
                }
            })
        })
        .catch(err => {
            console.error(err);
        });
}

function uploadToThingiverse({buffer, name, pngArrayBuffer}) {
    if (window.DEBUG_THINGIVERSE) console.log("uploadToThingiverse", pngArrayBuffer)
    
    const access_token = window.localStorage.getItem('thingiverse_access_token')
    fetch("https://api.thingiverse.com/things/", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            name: name,
            license: "cc",
            category: "Other",
            description: "# Made with [BuildBee MakeCode](https://makecode.buildbee.com).",
        })
    }).then(function (new_thing_response) {
        new_thing_response.json().then(function(new_thing_data) {
            const thing_id = new_thing_data.id
            
            fetch(`https://api.thingiverse.com/things/${thing_id}/files`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                },
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({
                    filename: "BuildBee MakeCode Export.stl"
                })
            }).then(function(get_url_response) {
                get_url_response.json().then(function(data) {
                    const formData  = new FormData()
                    for (const name in data.fields) {
                        formData.append(name, data.fields[name])
                    }
                    const arrayBuffer = stringToArrayBuffer(buffer);
                    var file = new File([arrayBuffer], "BuildBee MakeCode Export.stl", { type: "application/octet-stream" });
                    formData.append('file', file)
                    fetch(data.action, {
                        method: 'POST',
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: formData
                    }).then(function(upload_response) {
                        fetch(data.fields.success_action_redirect, {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${access_token}`
                            },
                            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    })}).then(function() {
                        window.open("https://www.thingiverse.com/thing:" + thing_id, "_blank")
                    });
                }
            )})
        });
    });
}

function addBuildBeeScripts() {

    // plate the files
    function receiveMessage(event) {
        if (/https:\/\/[\w-]*makecode.buildbee.com/.test(event.origin) || event.origin === "http://localhost:3232") {
            if (event.data) {
                const fileName = (event.data.name || "Untitled") + ".stl";
                    
                if (event.data.message === "sendToBuildBee") {

                    if (event.data.url) {
                        const hostname = new URL(event.data.url).hostname;
                        if (hostname === "app.buildbee.com") {
                            window.location.href= event.data.url + "&utm_source=makecode&utm_medium=upload-to-buildbee&utm_campaign=codeeditor&file_name=" + fileName
                        }
                    }
                }

                if (event.data.message === "downloadSTL") {

                    if (event.data.arrayBuffer) {
                        const arrayBuffer = stringToArrayBuffer(event.data.arrayBuffer);
                        var file = new File([arrayBuffer], fileName, { type: "application/octet-stream" });
                        saveAs(file);
                    }
                }
                if (event.data.message === "sendToThingiverse") {
                    sendToThingiverse(event)
                }
                if (event.data.message === "authorizeThingiverse") {
                    authorizeThingiverse(event)
                }
        }
    }
        // ...
    }
    window.addEventListener("message", receiveMessage, false)

}
addBuildBeeScripts()
