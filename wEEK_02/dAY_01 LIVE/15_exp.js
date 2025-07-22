function timeout() {
  console.log("CLick the button");
}

console.log("Hii");

setTimeout(timeout, 1000);

console.log("Welcome to loupe");

let c = 0;
for (let i = 0; i <= 10000000000; i++) {
  c = c + 1;
}
console.log("Expensive operation done");

// Hii
// Welcome to loupe
// Expensive operation done
// CLick the button ( it got first since the thread was busy & was in the queue)