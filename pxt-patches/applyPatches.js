const fs = require("fs");
const replace = require("replace-in-file");


console.log("applyPatches.js");
console.log("===============");
console.log(
  "Replacing index.html in node_modules with one that can open BuildBee URLS..."
);
// destination.txt will be created or overwritten by default.
fs.copyFileSync(
  "pxt-patches/index.html",
  "node_modules/pxt-core/webapp/public/index.html"
);

try {
  const date = new Date();
  const results = replace.sync({
    from: "?BBVER=d+",
    to: "?BBVER=" + date.getFullYear() + date.getMonth() + date.getDate(),
    files: ["pxt-patches/index.html", "sim/public/simulator.html"]
  });
  console.log("Replacement results:", results);
} catch (error) {
  console.error("Error occurred:", error);
}
