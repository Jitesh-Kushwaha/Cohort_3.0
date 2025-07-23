function setTimeoutPromisified(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

//Promise chaining
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hii");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("helloo");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello world");
  });

console.log("myself");

// myself
// hi (after 1s)
// hello (3s after hi)
// hello world (5s after hello)
