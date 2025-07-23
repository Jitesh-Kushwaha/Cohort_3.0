const fs = require("fs");

function setTimeoutPromisified(ms) {
  return Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function readFileAsync() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) {
        reject("file not found");
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync()
  .then(function (x) {
    console.log("files has been read => " + x);
  })
  .catch(function (e) {
    console.log(e);
  });

// output
// files has been read => fajfsdfoiqefiwefiocjadcijdm  qf qef  f d voaproi q qw rf9efipa9dok