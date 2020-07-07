// var x = 2;

// var y = "3";

// function sum(a, b) {
//   return a + b;
// }

// function mul(h, k) {
//   return h * k;
// }

// console.log("Hello");
// console.log(sum(x, y));
// console.log(mul(x, y));

// var func = sum;

// console.log(func);

function clicked() {
  console.log("You Clicked Me and also double");
}

function clicking() {
  var get = document.getElementById("inputfield");
  console.log(get.value);
  var out = document.getElementById("print");
  if (get.value == "Memoona") {
    out.innerHTML = "I Love You Mano Jee";
  } else {
    out.innerHTML = "I dont know you";
  }
}
