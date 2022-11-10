const path = require("path");

const filePath = path.join("content", "subContent", "textFile.txt");
console.log(filePath);

const baseFile = path.basename(filePath);
console.log(baseFile);

//for absolute path
const absolute = path.resolve(
  __dirname,
  "content",
  "subContent",
  "textFile.txt"
);

console.log(absolute);
