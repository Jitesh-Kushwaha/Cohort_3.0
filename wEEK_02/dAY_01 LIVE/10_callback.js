const fs = require("fs");

function afterFileRead(err, contents) {
  console.log(contents);
}
fs.readFile("a.txt", "utf-8", afterFileRead);
