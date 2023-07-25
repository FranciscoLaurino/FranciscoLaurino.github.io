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
let subract = document.querySelector("#subtract");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;
/*
  if (result > 10) {
    result = 0;
  }
*/
  output.innerText = result;
});

subract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});

// This function display values
function displayPedidoA(value) {
    document.getElementById().value += value;
}
// This function calculated Order values
function calculateOrders() {
    var p = document.getElementById("MaquinaCalculado").value;
    var q = eval(p)*2;
    document.getElementById("MaquinaCalculado").value = q;
}