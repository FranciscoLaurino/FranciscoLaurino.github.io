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
/* Original Counter
let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 0;
  }
  
  output.innerText = result;
});
*/

let add = document.querySelector("add_A");
let subract = document.querySelector("subtract_A");

add.addEventListener("click", function () {

  var id = item.attr("id");

  if(id == 'add_A')
  {
    let output = document.querySelector("#output_A");
    let result = Number(output.innerText) + 1;
    output.innerText = result;
  }
  if(id == 'add_B')
  {
    let output = document.querySelector("#output_B");
    let result = Number(output.innerText) + 1;
    output.innerText = result;
  }
  if(id == 'add_C')
  {
    let output = document.querySelector("#output_C");
    let result = Number(output.innerText) + 1;
    output.innerText = result;
  }
});
subract.addEventListener("click", function () {

  var id = item.attr("id");

  if(id == 'subtract_A')
  {
    let output = document.querySelector("#output_A");
    let result = Number(output.innerText) - 1;
    if (result < 10) {
      result = 0;
    }
    output.innerText = result;
  }
  if(id == 'subtract_B')
  {
    let output = document.querySelector("#output_B");
    let result = Number(output.innerText) - 1;
    if (result < 10) {
      result = 0;
    }
    output.innerText = result;
  }
  if(id == 'subtract_C')
  {
    let output = document.querySelector("#output_C");
    let result = Number(output.innerText) - 1;
    if (result < 10) {
      result = 0;
    }
    output.innerText = result;
  }
  
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
