
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
      function increment(counterName,amount) {
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
              "Do you want to upgrade the machine to level " + newLevel + " for $100?"
          );

          if (confirmUpgrade) {
              nivelMaquinaElement.innerText = newLevel;
              precioMaquinaElement.innerText = machines[counterName].levels[newLevel].price;
              // Your code to perform the actual upgrade goes here
          }
      }
      function upgradeWarehouse(counterName) {
          var nivelStockElement = document.getElementById("nivel" + counterName);
          var outputStockElement = document.getElementById("output" + counterName);
          var currentValue = parseInt(nivelStockElement.innerText);

          var newLevel = currentValue + 1;

          var confirmUpgrade = confirm(
              "Quieres upgradear tu deposito a nivel " + newLevel + " por $100?"
          );

          if (confirmUpgrade) {
              nivelStockElement.innerText = newLevel;
              outputStockElement.innerText = machines[counterName].levels[newLevel].output;
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
          if (stock > a1 + b1 + c1) {
              const ventas =
                  parseInt(counterElements['A'].innerText) * machines['A'].levels[parseInt(nivelElements['A'].innerText)].price +
                  parseInt(counterElements['B'].innerText) * machines['B'].levels[parseInt(nivelElements['B'].innerText)].price +
                  parseInt(counterElements['C'].innerText) * machines['C'].levels[parseInt(nivelElements['C'].innerText)].price;

              const insumos_restantes = stock - a1 - b1 - c1;

              alert('Ventas por: $' + ventas + ' y te quedan ' + insumos_restantes + ' en insumos.');
              //counterElements['D'].innerText = insumos_restantes;
              document.getElementById('counterD').innerText = insumos_restantes;
              var dineroElement = document.getElementById('dinero');
              var v_dinero = parseInt(dineroElement.innerText);
              dineroElement.innerText = v_dinero + ventas;

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
            dineroElement.innerText = v_dinero - (10*v_empleados); //$10, $15, $25
            turnoElement.innerText = v_turno + 1;
            if (v_turno > 11) {
                turnoElement.innerText = v_turno + 1;}
                else{
                    alert('Ultimo turno!');
            }
        }

        function incrementEmpleados() {
            var empleadosElement = document.getElementById('empleados');
            var currentValue = parseInt(empleadosElement.innerText);
            empleadosElement.innerText = currentValue + 1;
        }

        function randomCards() {
            var randomCardElement = document.getElementById('random_A');
            randomCard(randomCardElement);
            var randomCardElement = document.getElementById('random_B');
            randomCard(randomCardElement);
            var randomCardElement = document.getElementById('random_C');
            randomCard(randomCardElement);
        }
        function randomCard(typeOfOrder) {
            var A_Element = document.getElementById(typeOfOrder);
            var random_A = getRandomInt(0, 5);
            A_Element.innerText = random_A;
        }
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }