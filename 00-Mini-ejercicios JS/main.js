//EJERCICIO 1:

let numero1 = parseInt(prompt("Introduce el primer número: "));
let numero2 = parseInt(prompt("Introduce el segundo número: "));

let respuesta = numero1 - numero2;

document.writeln(
  "<h2>La diferencia de " + numero1 + " y " + numero2 + " es: " + respuesta
);

//EJERCICIO 2:

let nombre = prompt("Introduce tu nombre: ");
let localidad = prompt("Introduce tu localidad: ");
let dirección = prompt("Introduce tu dirección: ");
let hobbie = prompt("Introduce tu hobbie");

document.writeln(
  "<h2>Te llamas " +
    nombre +
    ", vives en " +
    localidad +
    ", tu dirección es " +
    dirección +
    " y te gusta " +
    hobbie +
    "</h2>"
);

//EJERCICIO 3:

let radio = prompt("Introduce el radio del círculo: ");
const PI = 3.1416;
let area = PI*(radio*radio)

document.writeln(
    "<h2>El area de un círculo con radio " +
      radio +
      " es: " +
      area.toFixed(4) +
      "</h2>"
  );


