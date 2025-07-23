function promiseCallback(resolve) {
  setTimeout(resolve, 3000);
}

promiseCallback(function () {
  console.log("hi");
});
// output(after 3s) hi

function promiseCallback(resolve) {
  setTimeout(resolve, 3000);
}

function main() {
  console.log("main is called");
}

promiseCallback(main);
// output(after 3s) main is called
