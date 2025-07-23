setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");
    setTimeout(function () {
      console.log("hello world");
    }, 5000);
  }, 3000);
}, 1000);

// output :-
// hi (after 1s)
// hello (3s after hi)
// hello world (5s after hello)
