async function sendSTLToBuildBee(blob, name) {
    console.log(blob)
    const arrayBuffer = await blob.arrayBuffer()
    BuildBeeConfigure({
       apiKey: 'L64OEmRLkm78wDYLRFjOT5q0hpuNuLgD6TXqRNrz',
       appName: 'PrintWithBuildBeeButton'
    })
    const finalUrl = await BuildBeeUpload({ buffer: arrayBuffer, extension: "stl", progressCallback: (percent)=>{
        document.getElementById("savedElement").innerHTML = "Saving... " + percent + "%"
    }});
    if (finalUrl) {
        // target='_blank' noopenner noreferrer
       //
       if (window.parent) {
            window.parent.postMessage({message: "sendToBuildBee", url:finalUrl, name: name }, window.location.href)
       }
       else {
            window.location.href = finalUrl
       }
    }
 }


function arrayBuffer2string(buffer) {
    // was suggested  https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
    // but this crashes on large files. 
    // so trying this https://stackoverflow.com/questions/38432611/converting-arraybuffer-to-string-maximum-call-stack-size-exceeded

    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return binary; //window.btoa(binary);
}
async function downloadSTL(blob, name) {

    const arrayBuffer = await blob.arrayBuffer()
    const arrayBufferStr = arrayBuffer2string(arrayBuffer)

    if (window.parent) {
        window.parent.postMessage({message: "downloadSTL", arrayBuffer:arrayBufferStr, name: name}, window.location.href)
    }
}

async function authorizeThingiverse(blob, name, code) {
    const arrayBuffer = await blob.arrayBuffer()
    const arrayBufferStr = arrayBuffer2string(arrayBuffer)

    if (window.parent) {
        window.parent.postMessage({message: "authorizeThingiverse", code: code, arrayBuffer:arrayBufferStr, name: name}, window.location.href)
    }
}


async function sendToThingiverse(blob, name, imageData) {
    const arrayBuffer = await blob.arrayBuffer()
    const arrayBufferStr = arrayBuffer2string(arrayBuffer)
    const imageDataStr = arrayBuffer2string(imageData.data.buffer)
    if (window.parent) {
        window.parent.postMessage({message: "sendToThingiverse", arrayBuffer:arrayBufferStr, name: name, imageData: imageDataStr}, window.location.href)
    }
}


let BuildBeeOptions;function BuildBeeConfigure({apiKey:e,server:t="https://app.buildbee.com",appName:n}){BuildBeeOptions={BUILDBEE_API_KEY:e,SERVER_NAME:t,APP_NAME:n}}async function BuildBeeUploadWithString({text:e,filename:t,extension:n="stl"}){const o=(new TextEncoder).encode(e).buffer;return await BuildBeeUpload({buffer:o,filename:t,extension:n})}async function BuildBeeUpload({buffer:e,filename:t,extension:n="stl",progressCallback:o}){if(!e)throw new Error("BuildBeeUploadBuffer: buffer is not set");if(!e instanceof ArrayBuffer)throw new Error("BuildBeeUploadBuffer, invalid type passed to buffer:"+typeof e);return await _requestUploadURI(n,BuildBeeOptions.APP_NAME,BuildBeeOptions.BUILDBEE_API_KEY).then(async function(n){return await _uploadArrayBuffer(e,e.byteLength,n,o),_getBuildbeeUploadURL(n,t)})}function _getBuildbeeUploadURL(e,t){return BuildBeeOptions.SERVER_NAME+"/upload-from-uri?file_url="+encodeURIComponent(e+"&fileName="+(t||"untitled"))}async function _requestUploadURI(e,t,n){return new Promise((o,r)=>{const i={method:"POST",headers:{"X-Api-Key":n,"Content-Type":"text/plain"},body:JSON.stringify({extension:e,appName:t})};fetch("https://relay.buildbee.com/fileimport/prod",i).then(async e=>{const t=await e.text();try{o(new URL(t).toString())}catch(e){r(t)}}).catch(e=>{console.log(e),r(e)})})}async function _uploadArrayBuffer(e,t,n,o){let r=new XMLHttpRequest;return r.upload.addEventListener("progress",function(e){o(e.loaded/e.total)}),r.open("PUT",n),new Promise((t,n)=>{r.send(e),r.onload=(e=>{t(r.response)}),r.onerror=(e=>n(r.response))})}