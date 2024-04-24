const path = require("node:path");

// join()
// const fullPath = path.join("sono", "blog", "pathModule.js");
// console.log(fullPath);

// sep
// const fullPath = path.join("sono", "blog", "pathModule.js");
// const sepPath = fullPath.split(path.sep);
// console.log(sepPath);

// dirname()
// const fullPath = path.join("sono", "blog", "pathModule.js");
// const dir = path.dirname(fullPath);
// console.log(dir);

// basename()
// const fullPath = path.join("sono", "blog", "pathModule.js");
// const file = path.basename(fullPath, ".js");
// console.log(file);

// extname()
// const fullPath = path.join("sono", "blog", "pathModule.js");
// const extension = path.extname(".index");
// console.log(extension);

// parse()
const parsedPath = path.parse(__filename);
console.log(__filename);
console.log(parsedPath);
