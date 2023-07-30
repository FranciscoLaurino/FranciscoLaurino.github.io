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

// This function display values & calculate orders
function displayPedidoA(value) {
    document.getElementById().value += value;
    var inputA = document.getElementById("inputA").value;
    var outputA = inputA*2;
    document.getElementById("MaquinaA").value = outputA;
}
function displayPedidoB(value) {
    document.getElementById().value += value;
    var inputB = document.getElementById("inputB").value;
    var outputB = inputB*1;
    document.getElementById("MaquinaB").value = outputB;
}
function displayPedidoC(value) {
    document.getElementById().value += value;
    var inputC = document.getElementById("inputC").value;
    var outputC = Math.floor(inputC/2);
    document.getElementById("MaquinaC").value = outputC;
}
// This function calculated Order values
function calculateOrders() {
    //pensar como validar los insumos vs los pedidos
}

//para el carousel 
$('input').on('change', function() {
  $('body').toggleClass('blue');
});
