//FS-MODULE SYNC

const fs = require("fs");

//To read file
const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/subContent/second.txt", "utf-8");
console.log(first);
console.log(second);

//Lines 1-3 can also be written as below
// const {readFileSync} = require('fs');
// const first = readFileSync("./content/first.txt", "utf-8");

//To write file
fs.writeFileSync(
  "./content/subContent/newFileCreatedUsingWriteFileSync.txt",
  `Here is the result: ${first},  ${second}`
);

//To append a file
fs.writeFileSync(
  "./content/subContent/newFileCreatedUsingWriteFileSync.txt",
  "...This is appended text!",
  { flag: "a" }
);
