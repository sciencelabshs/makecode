/* 
this file is loaded into the index.html of the outer frame, which gives
us access for certain actions out of the sandbox
*/
function addBuildBeeScripts()  {

    function stringToArrayBuffer(str) {
        // https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
    
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    // plate the files
    function receiveMessage(event) {
        if (/https:\/\/[\w-]*makecode.buildbee.com/.test(event.origin)   ||event.origin === "http://localhost:3232") {
            if (event.data) {
                
                if (event.data.message === "sendToBuildBee") {

                    if (event.data.url) {
                        const hostname = new URL(event.data.url).hostname;
                        if (hostname === "app.buildbee.com") {
                            window.location.href= event.data.url + "&utm_source=makecode&utm_medium=upload-to-buildbee&utm_campaign=codeeditor"
                        }
                    }
                }

                if (event.data.message === "downloadSTL") {

                    if (event.data.arrayBuffer) {
                        const arrayBuffer = stringToArrayBuffer(event.data.arrayBuffer);
                        var file = new File([arrayBuffer], "BuildBeeMakeCode.stl", { type: "application/octet-stream" });
                        saveAs(file);
                    }
                }
                if (event.data.message === "sendToThingiverse") {

                    if (event.data.arrayBuffer) {
                        const arrayBuffer = stringToArrayBuffer(event.data.arrayBuffer);
                        console.log("Hey thingiverse here's your arraybuffer", arrayBuffer)
                     
                    }
                }
            }
        }

        // ...
    }
    window.addEventListener("message", receiveMessage, false) 


}
addBuildBeeScripts()