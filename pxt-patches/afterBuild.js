const replace = require('replace-in-file')

// files deployed might not have a sha so (eh) - lets 
// just use the unixTimestamp instead. 
const unixTimestamp = () => {
    return Math.floor(new Date().getTime() / 1000)
}

console.log("afterBuild.js")
console.log("===============")

console.log('Adding in a new pxtRelId for the serviceWorker files');
const buildTag = "BB-applyPatches-" +  unixTimestamp();
replace.replaceInFileSync({
    files: 'built/packaged/*.js',
    from: /;@pxtRelId@/g,
    to: buildTag , // in their version this is the github hash
})


replace.replaceInFileSync({
    files: 'built/packaged/*.js',
    from: /pxtRelId:""/g,
    to: 'pxtRelId:"'+ buildTag +'"', // in their version this is the github hash
})


