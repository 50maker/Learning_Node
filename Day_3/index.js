// fs - file system
// os
// http
// path

// const fs = require("fs");

const os = require("os");
console.log("Architecture", os.arch());
console.log("Platform", os.platform());

// fs.writeFile("./texas.txt", "Hello World", {}, () => {
//   console.log("File is written");
// });

//we'll use fs for file handling

// fs.readFile("./texas.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// What is read stream and write stream: fs.createReadStream() fs.createWriteStream()
// Write a 2gb file with write stream
// read some lines of 2gb file without loading the whole file into memory
// OPTIONAL: pipe readstream and write into another file with a stream

//npm init -y

// HTTP verb: get post put patch delete

//postman
//to run: node server.js
