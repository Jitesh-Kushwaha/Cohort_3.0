// returns an object of the promise class
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  //object of the promise class
}

function callback() {
  console.log("3 secconds have passed");
}

setTimeoutPromisified(3000).then(callback);
