let respuestaej1 = document.getElementById("respuesta1");
let respuestaej2 = document.getElementById("respuesta2");
let respuestaej3 = document.getElementById("respuesta3");
let respuestaej4 = document.getElementById("respuesta4");
let respuestaej5 = document.getElementById("respuesta5");
let respuestaej6 = document.getElementById("respuesta6");

let respuestaTitanic1 = document.getElementById("Titanic1");
let respuestaTitanic2 = document.getElementById("Titanic2");
let respuestaTitanic3 = document.getElementById("Titanic3");
let respuestaTitanic4 = document.getElementById("Titanic4");
let respuestaTitanic5 = document.getElementById("Titanic5");

let respuestaAzar = document.getElementById("respuestaAzar");

let animal1 = document.getElementById("addAnimal1");
let animal2 = document.getElementById("addAnimal2");
let animal3 = document.getElementById("changeAnimal3");

let pasajero1 = document.getElementById("addPasajero1");
let pasajero2 = document.getElementById("addPasajero2");
let pasajero3 = document.getElementById("changePasajero2");

const animales = [
  "León",
  "Chimpancé",
  "Elefante",
  "Jirafa",
  "Hipopótamo",
  "Foca",
  "Camello",
];

const pasajeros = [
  "Carla",
  "Anthonny",
  "Luis",
  "Ana",
  "Sandra",
  "Alberto",
  "Dayana",
  "Katherine",
  "Daniela",
  "Marco",
  "Vinicio",
  "Daniel",
];

function imprimir(respuesta) {
  for (let i = 0; i < animales.length; i++) {
    if (i <= animales.length - 2) {
      respuesta.innerHTML += animales[i] + ", ";
    } else respuesta.innerHTML += animales[i];
  }
}

function ejercicio1() {
  imprimir(respuestaej1);
  animales[7] = animal1.value;
  animales[8] = animal2.value;
  imprimir(respuestaej2);
  animales[3] = animal3.value;
  imprimir(respuestaej3);
  animales.pop();
  imprimir(respuestaej4);
  respuestaej5.innerHTML += animales.length;
}

function inversa() {
  for (i = animales.length - 1; i >= 0; i--) {
    if (i != 0 || i == animales.length - 1) {
      respuestaej6.innerHTML += animales[i] + ", ";
    } else respuestaej6.innerHTML += animales[i];
  }
}

function imprimir2(respuesta) {
  for (let i = 0; i < pasajeros.length; i++) {
    if (i <= pasajeros.length - 2) {
      respuesta.innerHTML += pasajeros[i] + ", ";
    } else respuesta.innerHTML += pasajeros[i];
  }
}

function ejercicio2() {
  imprimir2(respuestaTitanic1);
  pasajeros.pop();
  pasajeros.pop();
  imprimir2(respuestaTitanic2);
  pasajeros[pasajeros.length] = pasajero1.value;
  pasajeros[pasajeros.length] = pasajero2.value;
  imprimir2(respuestaTitanic3);
  pasajeros[1] = pasajero3.value;
  imprimir2(respuestaTitanic4);
  respuestaTitanic5.innerHTML += "Excelente viaje, que Dios bendiga a todos!";
}

function ejercicio4() {
  const juego = [
    "Ganas 50€",
    "Pierdes 100€",
    "No importa cuanto te esfuerces, repruebas el examen",
    "Ganas un viaje pagado",
    "Ganas un iPhone 16 Pro Max",
    "Pierdes tu nómina",
    "Ganas 20€",
    "Ganas la nómina de tu compañero que perdió su nómina",
  ];
  let numero = Math.floor(Math.random() * juego.length);
  respuestaAzar.innerHTML =
    "En el juego del azar, TU...... " +
    "<p><br></p>" +
    "<h2>" +
    juego[numero] +
    "</h2>";
}
