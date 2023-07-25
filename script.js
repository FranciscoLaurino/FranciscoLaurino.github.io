// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}


// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

//This is for the counter 
let add = document.querySelector("#add");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = output.innerText + 1;

  output.innerText = result;
});
