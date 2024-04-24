const fs = require("node:fs");
const fsPromise = require("node:fs/promises");

// mkdirSync(path[, options])
// fs.mkdirSync("madeDir");
// fs.mkdir("madeDirToCallBack", (err) => {
//   if (err) throw err;
// });
// (async function () {
//   try {
//     await fsPromise.mkdir("madeDirToPromise");
//   } catch (error) {
//     throw error;
//   }
// })();

// fs.writeFileSync("./madeDir/madeFile.txt", "1. 동기 방식으로 파일 생성");
// fs.writeFile(
//   "./madeDirToCallBack/madeFileToCallBack.txt",
//   "2. 콜백함수로 파일 생성",
//   (err) => {
//     if (err) throw err;
//   }
// );
// (async function () {
//   try {
//     await fsPromise.writeFile(
//       "./madeDirToPromise/madeFileToPromise.txt",
//       "3. Promise로 파일 생성"
//     );
//   } catch (error) {
//     throw error;
//   }
// })();

// const madeFile = fs.readFileSync("./madeDir/madeFile.txt", {
//   encoding: "utf8",
// });
// console.log(madeFile);

// fs.readFile(
//   "./madeDirToCallBack/madeFileToCallBack.txt",
//   {
//     encoding: "utf8",
//   },
//   (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log(data);
//     }
//   }
// );
// (async function () {
//   try {
//     const madeFileToPromise = await fsPromise.readFile(
//       "./madeDirToPromise/madeFileToPromise.txt",
//       {
//         encoding: "utf8",
//       }
//     );
//     console.log(madeFileToPromise);
//   } catch (error) {
//     throw error;
//   }
// })();

// const NodeServerDir = fs.readdirSync(
//   "/Users/ryuhojun/Documents/usingBlog/NodeServer"
// );
// console.log(NodeServerDir);

// fs.readdir("/Users/ryuhojun/Documents/usingBlog/NodeServer", (err, files) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(files);
//   }
// });

// (async function () {
//   try {
//     const NodeServerDir = await fsPromise.readdir(
//       "/Users/ryuhojun/Documents/usingBlog/NodeServer"
//     );
//     console.log(NodeServerDir);
//   } catch (error) {
//     throw error;
//   }
// })();

// const madeDir = fs.readdirSync(
//   "/Users/ryuhojun/Documents/usingBlog/NodeServer/madeDir"
// );
// console.log(madeDir[0]);
// fs.unlinkSync(
//   "/Users/ryuhojun/Documents/usingBlog/NodeServer/madeDir/" + madeDir[0]
// );
// fs.rmdirSync("/Users/ryuhojun/Documents/usingBlog/NodeServer/madeDir");

// fs.unlink(
//   "/Users/ryuhojun/Documents/usingBlog/NodeServer/madeDirToCallBack/madeFileToCallBack.txt",
//   (err) => {
//     if (err) throw err;
//   }
// );
// fs.rmdir(
//   "/Users/ryuhojun/Documents/usingBlog/NodeServer/madeDirToCallBack",
//   (err) => {
//     if (err) throw err;
//   }
// );

(async function () {
  try {
    await fsPromise.unlink(
      "/Users/ryuhojun/Documents/usingBlog/NodeServer/madeDirToPromise/madeFileToPromise.txt"
    );
    await fsPromise.rmdir(
      "/Users/ryuhojun/Documents/usingBlog/NodeServer/madeDirToPromise"
    );
  } catch (error) {
    throw error;
  }
})();
