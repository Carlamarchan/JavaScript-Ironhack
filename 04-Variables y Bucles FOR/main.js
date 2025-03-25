//1. EJERCICIO DE INTERCAMBIO DE VALORES EN DOS VARIABLES
document.writeln(
  `<h2> Intercambio de valores en 2 variables </h2>`
);
let variable1 = prompt("Ingrese el nombre de la primera persona");
let variable2 = prompt("Ingrese el nombre de la segunda persona");
let variable3 = "";
document.writeln(`La primera persona es ${variable1} <br>`);
document.writeln(`La segunda persona es ${variable2} <br>`);
document.writeln(
  `En Barcelona está ${variable1}, y en Tarragona está ${variable2} <br>`
);
variable3 = variable1;
variable1 = variable2;
variable2 = variable3;
document.writeln(`Luego del cambio de variables, tenemos: <br>`);
document.writeln(`La primera persona es ${variable1} <br>`);
document.writeln(`La segunda persona es ${variable2} <br>`);
document.writeln(
  `En Barcelona está ${variable1}, y en Tarragona está ${variable2} <br>`
);

//2. BUFFET LIBRE RESTAURANTE
document.writeln(`<h2> Buffet Libre Restaurante </h2> `);
let totalPlatos = parseInt(
  prompt(`Ingrese la cantidad de platos que vas a comer`)
);
for (let i = 0; i < totalPlatos; i++) {
  let plato = prompt(`Qué plato vas a ordenar?`);
  document.writeln(`Has ordenado ${plato} <br>`);
  if (i == 4) {
    document.writeln(`Vas a reventar!! <br>`);
  }
}

//3. VIAJE A TARRAGONA
document.writeln(`<h2> Nos vamos de viaje a Tarragona </h2> `);
for (let i = 100; i >= 0; i--) {
  if (i == 100) {
    document.writeln("Arrancamos!!!" + "<br>");
  }
  if (i == 50) {
    document.writeln("Ya vamos por la mitad!!!" + "<br>");
  }
  if (i == 15) {
    document.writeln("Ya casi estamos!!!" + "<br>");
  }
  if (i == 0) {
    document.writeln("Llegamos!! Vivan las vacaciones" + "<br>");
  }
}
