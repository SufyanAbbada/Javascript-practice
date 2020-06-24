var x = 2;

var y = "3";

function sum(a, b) {
  return a + b;
}

function mul(h, k) {
  return h * k;
}

console.log("Hello");
console.log(sum(x, y));
console.log(mul(x, y));

var func = sum;

console.log(func);
