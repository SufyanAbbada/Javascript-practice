function calculate() {
  var pkrupee = document.getElementById("pkr").value / 17;
  console.log(pkrupee);
  document.getElementById("result").innerHTML = pkrupee;
}

function getvalue() {
  var result = document.getElementById("btn");
  result.onclick = calculate;
}

window.onload = getvalue;
