const fs = require("fs");

function print(err, data) {
  console.log(data);
}
const contents1 = fs.readFile("a.txt", "utf-8", print); //asynchronously
console.log(contents1);

const contents2 = fs.readFile("b. txt", "utf-8", print); //asynchronously
console.log(contents2);

// undefined
// undefined
// undefined
// hello, hi there
// My name is Jitesh
