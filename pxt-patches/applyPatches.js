const fs = require('fs');

console.log("applyPatches.js")
console.log("===============")
console.log('Replacing index.html in node_modules with one that can open BuildBee URLS...');
// destination.txt will be created or overwritten by default.
fs.copyFileSync('pxt-patches/index.html', 'node_modules/pxt-core/webapp/public/index.html');



