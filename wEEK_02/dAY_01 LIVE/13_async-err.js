const fs = require("fs");

function print(err, data) {
  if (err) {
    console.log("File not found");
  } else console.log(data);
}

fs.readFile("abcd.txt", "utf-8", print); //asynchronously

// File not found
