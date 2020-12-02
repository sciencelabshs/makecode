/* 
this file is loaded into the index.html of the outer frame, which gives
us access for certain actions out of the sandbox
*/

const CLIENT_ID = '427e8320137ceca41834'


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
                    pngArrayBuffer: event.data.imageData
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
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            name: name,
            license: "cc",
            category: "Other",
            description: "# Made with [BuildBee MakeCode](https://makecode.buildbee.com).",
        })
    }).then(function (new_thing_response) {
        new_thing_response.json().then(async function(new_thing_data) {
            const thing_id = new_thing_data.id

            const postFileToThingiverse = function(thing_id, arrayBufferToUpload, filename, mimetype="application/octet-stream") {
                return new Promise(async function(resolve, reject) {
                    const get_url_response = await fetch(`https://api.thingiverse.com/things/${thing_id}/files`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${access_token}`,
                            'Content-Type': 'application/json',
                            "Accept": "application/json"
                        },
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify({
                            filename: filename
                        })})
                    const data = await get_url_response.json()
                    const formData  = new FormData()
                    for (const name in data.fields) {
                        formData.append(name, data.fields[name])
                    }
                    var arrayBuffer = arrayBufferToUpload;
                    var file = new File([arrayBuffer], filename, { type: mimetype });
                    formData.append('file', file)
                    const upload_response = await fetch(data.action, {
                        method: 'POST',
                        referrerPolicy: 'no-referrer',
                        body: formData
                    })
                    await fetch(data.fields.success_action_redirect, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        },
                        referrerPolicy: 'no-referrer',
                    })
                    resolve()
                })}
            await Promise.all([
                postFileToThingiverse(thing_id, buffer, "BuildBee MakeCode Export.stl"),
                postFileToThingiverse(thing_id, pngArrayBuffer, "Screenshot.png", "image/png")
            ])
            window.open("https://www.thingiverse.com/thing:" + thing_id, "_blank")
        });
    });
}

function saveSTL(event, fileName) {
    if (event.data.arrayBuffer) {
        const arrayBuffer = event.data.arrayBuffer;
        if (arrayBuffer) {
            var file = new File([arrayBuffer], fileName, { type: "application/octet-stream" });
            saveAs(file);
        }
    }
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

                    saveSTL(event, fileName)
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
