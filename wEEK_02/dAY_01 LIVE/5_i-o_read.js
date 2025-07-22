const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const data = fs.readFileSync("b.txt", "utf-8");
console.log(data);

// hello, hi there
// My name is Jitesh
// hello there from b.txt