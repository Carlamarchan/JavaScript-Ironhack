function operacionSinReturn(num1, num2, signo) {
  let respuesta = 0;
  let signoLetras = "";
  if (signo == "+") {
    respuesta = num1 + num2;
    signoLetras = "suma";
  } else {
    respuesta = num1 - num2;
    signoLetras = "resta";
  }
  document.getElementById(
    "divPrint"
  ).innerHTML += `El resultado de la ${signoLetras} es: ${respuesta} <br>`; //+=Concatena contenido
}
function operacionConReturn(num1, num2, signo) {
  let respuesta = 0;

  if (signo == "+") {
    respuesta = num1 + num2;
  } else {
    respuesta = num1 - num2;
  }
  return respuesta;
}

function comprobarNumero(numeroSecreto, intento) {
  if (numeroSecreto == intento) {
    iguales = 1;
  } else if (numeroSecreto <= intento) {
    iguales = 2;
  } else iguales = 3;
  return iguales;
}

function saludoIterativo(saludo, nombre) {
  let frase = saludo + " " + nombre+"<br>";
  return frase;
}

function ejercicio1() {
  let num1 = parseInt(prompt("Ingrese el número 1"));
  let num2 = parseInt(prompt("Ingrese el número 2"));
  let signo = prompt("Ingrese la operación a realizar");

  document.getElementById(
    "divPrint"
  ).innerHTML += `<h2> Ejercicio 1. para introducir 2 números y sumar o restar (SIN RETURN) <br></h2>`;

  operacionSinReturn(num1, num2, signo) + "<br>";

  document.getElementById(
    "divPrint"
  ).innerHTML += `<h2>Ejercicio 1. para introducir 2 números y sumar o restar (CON RETURN) <br></h2>`;

  if (signo == "+") {
    signoLetras = "suma";
  } else {
    signoLetras = "resta";
  }

  let respuesta = operacionConReturn(num1, num2, signo);

  document.getElementById(
    "divPrint"
  ).innerHTML += `El resultado de la ${signoLetras} es: ${respuesta} <br>`;
}

function ejercicio2() {
  document.getElementById(
    "divPrint"
  ).innerHTML += `<h2>Ejercicio 2. Adivina el número<br></h2>`; //= Borra y me agrega nuevo contenido
  let numeroSecreto = prompt("Ingresea el número SECRETO");
  let flag = false;

  for (let i = 0; i < 3; i++) {
    let intento = prompt("Intenta adivinar el número");
    if (comprobarNumero(numeroSecreto, intento) == 1) {
      document.getElementById("divPrint").innerHTML +=
        "Has adivinado el número! FELICIDADES";
      flag = true;
      break;
    } else if (comprobarNumero(numeroSecreto, intento) == 2) {
      document.getElementById("divPrint").innerHTML +=
        "El número secreto es menor que " + intento + "<br>";
    } else {
      document.getElementById("divPrint").innerHTML +=
        "El número secreto es mayor que " + intento + "<br>";
    }
  }
  if (flag == false) {
    document.getElementById("divPrint").innerHTML +=
      "Lo siento, NO has adivinado el número";
  }
}

function ejercicio3() {
    document.getElementById(
        "divPrint"
      ).innerHTML += `<h2> Ejercicio 3. Frase SALUDO ITERATIVO <br></h2>`;
    
  let cantidad = prompt("A cuántas personas vamos a saludar?");
 
  for (let i = 0; i < cantidad; i++) {
    let saludo = prompt("Ingrese un saludo, despido, algo que decir...");
    let nombre = prompt(
      "Ingrese el nombre de la persona a la que se enviará el mensaje"
    );
    document.getElementById("divPrint").innerHTML += saludoIterativo(saludo, nombre);;
  }
}
