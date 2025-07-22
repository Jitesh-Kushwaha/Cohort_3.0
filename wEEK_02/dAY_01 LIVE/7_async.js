//Starts all 3 tasks together and wait for them to finish together.

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// hello, hi there
// My name is Jitesh
// hello there from b.txt
// hello, hi there
// My name is Jitesh
