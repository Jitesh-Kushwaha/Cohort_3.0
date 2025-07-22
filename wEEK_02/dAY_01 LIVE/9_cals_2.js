// Approach 2

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multipy(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  let val = op(a, b);
  return val;
}

const ans = doOperation(12, 6, divide);
console.log(ans);
S;
