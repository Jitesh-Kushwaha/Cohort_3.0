function setTimeoutPromisified(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello world");
    });
  });
});

// output :-
// hi (after 1s)
// hello (3s after hi)
// hello world (5s after hello)
