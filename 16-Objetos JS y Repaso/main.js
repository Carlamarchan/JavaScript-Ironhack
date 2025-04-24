let respuestaEjercicio1 = document.getElementById("respuestaEjercicio1");
let botonEjercicio1 = document.getElementById("enviarEjercicio1");
let respuestaEjercicio1PorAtributo = document.getElementById(
  "respuestaEjercicio1PorAtributo"
);

class Perro {
  nombre;
  raza;
  edad;
  ubicacion;
  owner;

  constructor(nombre, raza, edad, ubicacion, owner) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.ubicacion = ubicacion;
    this.owner = owner;
  }

  //Método
  ladrar() {
    alert(this.nombre + " es un perro de raza " + this.raza + " y hace Guau!");
  }

  //Mostrar todos los datos como texto
  toString() {
    return `${this.nombre}, es un perro de raza ${this.raza}, tiene ${this.edad} años. Se encuentra en ${this.ubicacion} y su dueño es: ${this.owner} <br>`;
  }
}

let perro1 = new Perro("Luna", "Schnauzer", 2, "Zaragoza", "Carla");
let perro2 = new Perro("Fifi", "Bulldog", 7, "Barcelona", "Pedro");
let perro3 = new Perro("Candy", "Caniche", 1, "Madrid", "Daniela");
let perro4 = new Perro("Peluchín", "Pitbull", 10, "Bilbao", "Mario");
let perro5 = new Perro("Bruno", "Schnauzer", 5, "Zaragoza", "Katy");

const perrera = [perro1, perro2, perro3, perro4, perro5];

for (let i = 0; i <= perrera.length; i++) {
  respuestaEjercicio1.innerHTML += perrera[i].toString();
}

function imprimirAtributoSeleccionado() {
  respuestaEjercicio1PorAtributo.innerHTML = "";
  let valorSelect = document.getElementById("mySelect").value;
  for (let i = 0; i <= perrera.length; i++) {
    switch (valorSelect) {
      case "nombre":
        respuestaEjercicio1PorAtributo.innerHTML += perrera[i].nombre;
        break;
      case "raza":
        respuestaEjercicio1PorAtributo.innerHTML += perrera[i].raza;
        break;
      case "edad":
        respuestaEjercicio1PorAtributo.innerHTML += perrera[i].edad;
        break;
      case "ubicacion":
        respuestaEjercicio1PorAtributo.innerHTML += perrera[i].ubicacion;
        break;
      case "owner":
        respuestaEjercicio1PorAtributo.innerHTML += perrera[i].owner;
        break;
    }
    respuestaEjercicio1PorAtributo.innerHTML += "<br>";
  }
}

// Ejercicio2

function buscarPalabra() {
  let respuestaEjercicio2 = document.getElementById("respuestaEjercicio2");
  let frase = document.getElementById("frase");
  let palabra = document.getElementById("palabra").value;
  let fraseArray = frase.value.split(" ");
  let fraseMayus = [];
  fraseArray.forEach((element) => {
    fraseMayus.push(element.toUpperCase());
  });
  let existe = false;

  for (const element of fraseMayus) {
    if (palabra.toUpperCase() == element) {
      existe = true;
    }
  }

  if (existe) {
    respuestaEjercicio2.innerHTML =
      'La palabra "' + palabra + '" está presente en el texto';
  } else {
    respuestaEjercicio2.innerHTML =
      "La palabra " + palabra + " NO está presente en el texto";
  }
}

//Ejercicio 3

function multiplicar() {
  let tablaDeMultiplicar = parseInt(
    document.getElementById("tablaDeMultiplicar").value
  );
  let tabla = [];
  let respuestaEjercicio3 = document.getElementById("respuestaEjercicio3");
  respuestaEjercicio3.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    tabla[i] = (i + 1) * tablaDeMultiplicar;
    respuestaEjercicio3.innerHTML +=
      i +
      1 +
      "x" +
      tablaDeMultiplicar +
      "=" +
      (i + 1) * tablaDeMultiplicar +
      "<br>";
  }
}

//Ejercicio 4

function colorear() {
  let texto = document.getElementById("texto");
  let fondo = document.getElementById("fondo");
  let circulo = document.getElementById("circulo");

  let paleta1 = ["red", "yellow", "rgb(111, 211, 18)"];
  let paleta2 = ["blue", "purple", "grey"];
  let paleta3 = ["rgb(189, 16, 146)", "rgb(20, 99, 151)", "orange"];

  let valor = Math.floor(Math.random() * 3);

  texto.style.color = paleta1[valor];
  fondo.style.backgroundColor = paleta2[valor];
  circulo.style.backgroundColor = paleta3[valor];
}
