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

// function clicked() {
//   console.log("You Clicked Me and also double");
// }

// function clicking() {
//   var get = document.getElementById("inputfield");
//   console.log(get.value);
//   var out = document.getElementById("print");
//   if (get.value == "Memoona") {
//     out.innerHTML = "I Love You Mano Jee";
//   } else {
//     out.innerHTML = "I dont know you";
//   }
// }

// function calculation() {
//   var compare = document.getElementById("check");
//   var result = document.getElementById("Here");
//   var value = compare.value;
//   if (value > 10) {
//     result.innerHTML = "Your Number is Greater";
//   } else if (value < 10) {
//     result.innerHTML = "Your Number is lagging behind";
//   } else {
//     result.innerHTML = "Equal!!!";
//   }
// }

// window.onload = function () {
//   var calculate = document.getElementById("letscheck");
//   calculate.onclick = calculation;
// };

// function Appending() {
//   var newTodo = document.getElementById("todos").value;
//   var todolist = document.getElementById("list");
//   //Down here we create the TextNode that have just a text that can be associated to any tag with some text
//   //In our case, that text is the text in the Input text filed so we give it the value of newtodo
//   var sometext = document.createTextNode(newTodo);
//   //And now we need to add a new HTML element and in our case, it is 'li'
//   var newtodoitem = document.createElement("li");
//   //Now here we will append that text in that tag.
//   newtodoitem.appendChild(sometext);
//   //And at last, add this fully created list item tag in the existing ul tag whose id is already fetched
//   todolist.appendChild(newtodoitem);
// }

// window.onload = function () {
//   var add = document.getElementById("adding");
//   add.onclick = Appending;
// };

// function deleting(e) {
//   var delbtn = e.target;
//   //target is used to tell that it is the target of the object just came
//   //Now we want to delete that tag item.So, we simply will go to its parent Node
//   //And after going there, we simply will delete that list item which was already selected,
//   var tagitem = delbtn.parentNode;
//   tagitem.parentNode.removeChild(tagitem);
// }

function fonts() {
  var divs = document.getElementsByTagName("div");
  if(divs[0].style.fontFamily != 'Arial'){
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.fontFamily = 'Arial';
    }
  }
  else{
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.fontFamily = 'Georgia';
    }
  }
}

window.onload = function () {
  var change = document.getElementById("btn");
  change.onclick = fonts;
};
