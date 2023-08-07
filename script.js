const machines = {
    A: {
        levels: {
            1: { price: 10, name: "Basic", input: 1, output: 2 },
            2: { price: 20, name: "Intermediate", input: 1, output: 3 },
            3: { price: 40, name: "Advanced", input: 1, output: 4 },
        },
    },
    B: {
        levels: {
            1: { price: 4, name: "Basic", input: 1, output: 1 },
            2: { price: 8, name: "Intermediate", input: 1, output: 1 },
            3: { price: 15, name: "Advanced", input: 1, output: 2 },
        },
    },
    C: {
        levels: {
            1: { price: 15, name: "Basic", input: 2, output: 1 },
            2: { price: 30, name: "Intermediate", input: 2, output: 2 },
            3: { price: 50, name: "Advanced", input: 2, output: 3 },
        },
    },
    D: {
        levels: {
            1: { price: 100, name: "Basic", input: 2, output: 100 },
            2: { price: 200, name: "Intermediate", input: 2, output: 300 },
            3: { price: 300, name: "Advanced", input: 2, output: 1000 },
        },
    },
};
const empleados = {
    Emp: {
        levels: {
            0: { sueldo: 5,  name: "Trainee",     maquinasLvl: 0 },
            1: { sueldo: 10, name: "Junior",      maquinasLvl: 1 },
            2: { sueldo: 15, name: "Semi Senior", maquinasLvl: 2 },
            3: { sueldo: 25, name: "Senior",      maquinasLvl: 3 },
        },
    },
};
// Function to display machine details including selling price, input, and output for each machine
function displayMachineDetails(machineId) {
    const nivelElement = document.getElementById(`nivel${machineId}`);
    const level = parseInt(nivelElement.innerText);
    const priceElement = document.getElementById(`price${machineId}`);
    const inputElement = document.getElementById(`input${machineId}`);
    const outputElement = document.getElementById(`output${machineId}`);

    if (machines[machineId].levels[level].price !== undefined) {
        priceElement.textContent = machines[machineId].levels[level].price;
    }

    if (machines[machineId].levels[level].input !== undefined) {
        inputElement.textContent = machines[machineId].levels[level].input;
    }

    if (machines[machineId].levels[level].output !== undefined) {
        outputElement.textContent = machines[machineId].levels[level].output;
    }

}

function displayWarehouseDetails(machineId) {
    const nivelElement = document.getElementById(`nivel${machineId}`);
    const level = parseInt(nivelElement.innerText);
    const outputElement = document.getElementById(`output${machineId}`);

    if (machines[machineId].levels[level].output !== undefined) {
        outputElement.textContent = machines[machineId].levels[level].output;
    }

}

// Call the function for each machine
document.addEventListener("DOMContentLoaded", function () {
    displayMachineDetails('A');
    displayMachineDetails('B');
    displayMachineDetails('C');
    displayWarehouseDetails('D');
});


// Individual Counters
function increment(counterName, amount) {
    var counterElement = document.getElementById('counter' + counterName);
    var currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue + amount;
}

function decrement(counterName) {
    var counterElement = document.getElementById('counter' + counterName);
    var currentValue = parseInt(counterElement.innerText);
    if (currentValue > 0) {
        counterElement.innerText = currentValue - 1;
    }
}

function upgrade(counterName) {
    var nivelMaquinaElement = document.getElementById("nivel" + counterName);
    var precioMaquinaElement = document.getElementById("price" + counterName);
    var currentValue = parseInt(nivelMaquinaElement.innerText);

    var newLevel = currentValue + 1;

    var confirmUpgrade = confirm(
        "Do you want to upgrade the machine to level " + newLevel + " for $50?"
    );

    if (confirmUpgrade) {
        nivelMaquinaElement.innerText = newLevel;
        precioMaquinaElement.innerText = machines[counterName].levels[newLevel].price;
        //Actualizar dinero
        var dineroElement = document.getElementById('dinero');
        var v_dinero = parseInt(dineroElement.innerText);
        dineroElement.innerText = v_dinero - 50;
        //log
        logAction('Subiste el nivel de una maquina');
    }
}
function upgradeWarehouse(counterName) {
    var nivelStockElement = document.getElementById("nivel" + counterName);
    var outputStockElement = document.getElementById("output" + counterName);
    var currentValue = parseInt(nivelStockElement.innerText);

    var newLevel = currentValue + 1;

    var confirmUpgrade = confirm(
        "Quieres upgradear tu deposito a nivel " + newLevel + " por $50?"
    );

    if (confirmUpgrade) {
        nivelStockElement.innerText = newLevel;
        outputStockElement.innerText = machines[counterName].levels[newLevel].output;
        //Actualizar dinero
        var dineroElement = document.getElementById('dinero');
        var v_dinero = parseInt(dineroElement.innerText);
        dineroElement.innerText = v_dinero - 50;
                //log
                logAction('Subiste la capacidad de tu deposito');
    }
}

function calculate() {
    const counterElements = {
        A: document.getElementById('counterA'),
        B: document.getElementById('counterB'),
        C: document.getElementById('counterC'),
        D: document.getElementById('counterD'),
    };

    const nivelElements = {
        A: document.getElementById('nivelA'),
        B: document.getElementById('nivelB'),
        C: document.getElementById('nivelC'),
        D: document.getElementById('nivelD'),
    };

    const a1 = Math.ceil(
        parseInt(counterElements['A'].innerText) /
        machines['A'].levels[parseInt(nivelElements['A'].innerText)].output *
        machines['A'].levels[parseInt(nivelElements['A'].innerText)].input
    );

    const b1 = Math.ceil(
        parseInt(counterElements['B'].innerText) /
        machines['B'].levels[parseInt(nivelElements['B'].innerText)].output *
        machines['B'].levels[parseInt(nivelElements['B'].innerText)].input
    );

    const c1 = Math.ceil(
        parseInt(counterElements['C'].innerText) /
        machines['C'].levels[parseInt(nivelElements['C'].innerText)].output *
        machines['C'].levels[parseInt(nivelElements['C'].innerText)].input
    );


    const stock = parseInt(counterElements['D'].innerText);

    if (stock >= a1 + b1 + c1) {
        const ventas =
            parseInt(counterElements['A'].innerText) * machines['A'].levels[parseInt(nivelElements['A'].innerText)].price +
            parseInt(counterElements['B'].innerText) * machines['B'].levels[parseInt(nivelElements['B'].innerText)].price +
            parseInt(counterElements['C'].innerText) * machines['C'].levels[parseInt(nivelElements['C'].innerText)].price;

        const insumosGastados = a1 + b1 + c1;
        const insumos_restantes = stock - insumosGastados;
        alert('Ventas por: $' + ventas + 'Gastaste:' + insumosGastados + 'insumos  y te quedan ' + insumos_restantes + ' en deposito.');

        //reseteo de todas las variables de pedidos
        document.getElementById('counterA').innerText = 0;
        document.getElementById('counterB').innerText = 0;
        document.getElementById('counterC').innerText = 0;
        document.getElementById('counterD').innerText = insumos_restantes;

        //Actualizar dinero
        var dineroElement = document.getElementById('dinero');
        var v_dinero = parseInt(dineroElement.innerText);
        dineroElement.innerText = v_dinero + ventas;
        //log
        logAction('Ventas por: $' + ventas + 'Gastaste:' + insumosGastados + 'insumos  y te quedan ' + insumos_restantes + ' en deposito.');

        // Hide the popup after calculation
        var popup = document.getElementById('popup');
        popup.style.display = 'none';


    } else {
        alert('No te alcanzan los insumos ' + stock + '. Pedidos: ' + a1 + ' , ' + b1 + ' , ' + c1);
        var popup = document.getElementById('popup');
        popup.style.display = 'none';


    }
}

function pagarSueldos() {
    var dineroElement = document.getElementById('dinero');
    var v_dinero = parseInt(dineroElement.innerText);
    var turnoElement = document.getElementById('turno');
    var v_turno = parseInt(turnoElement.innerText);
    var empleadosElement = document.getElementById('empleados');
    var v_empleados = parseInt(empleadosElement.innerText);
    var sueldosApagar = (10 * v_empleados); //$10, $15, $25
    dineroElement.innerText = v_dinero - sueldosApagar;
    if (v_turno < 11) {
        turnoElement.innerText = v_turno + 1;
        //log
        logAction('Pagaste $' + sueldosApagar + 'en sueldos.');
        logAction('Arranca Turno:' + turnoElement.innerText);
    }
    else {
        alert('Ultimo turno!');
        turnoElement.innerText = v_turno + 1;
        logAction('Arranca Turno:' + turnoElement.innerText);
    }
}

function ascenderNcontratar() {
    var empleadosElement = document.getElementById('empleados');
    var currentValue = parseInt(empleadosElement.innerText);
    empleadosElement.innerText = currentValue + 1;
    logAction('Contrataste un nuevo empleado:');

}

function randomCards() {
    //var randomCardElement = document.getElementById('random_A');
    randomCard('random_A');
    randomCard('random_B');
    randomCard('random_C');
    logAction(action); // no se si functiona
}
function randomCard(typeOfOrder) {
    var A_Element = document.getElementById(typeOfOrder);
    var random_A = getRandomInt(0, 5);
    A_Element.innerText = random_A;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//for log:
function logAction(action) {
    const logList = document.getElementById("logList");
    const li = document.createElement("li");
    li.textContent = action;
    logList.appendChild(li);
}

function performAction(action) {
    // Perform your action here
    // For example: update counters, levels, etc.
    
    // Log the action
    logAction(action);
}
/*
// Attach event listeners to your buttons
const buttons = document.querySelectorAll(".btn-group button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const action = this.textContent;
        performAction(action);
    });
});
*/