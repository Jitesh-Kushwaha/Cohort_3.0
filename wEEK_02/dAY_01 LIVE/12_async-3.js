const fs = require("fs");

function print(err, data) {
  console.log(data);
}

fs.readFile("a.txt", "utf-8", print); //asynchronously
fs.readFile("b. txt", "utf-8", print); //asynchronously

console.log("Done!/");

// since it is an asynchronous
// arent waiting synchronously for the i/o to happen
// hence the Done gets first
// Done!/
// undefined
// hello, hi there
// My name is Jitesh
