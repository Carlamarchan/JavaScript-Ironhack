let pTotalRegalos = document.getElementById("totalRegalos");
let totalRegalos = 500;
let personaje = document.getElementById("");

function ejercicio1() {
  if (totalRegalos == 0) {
    alert("Se han entregado todos los regalos");
    return;
  }

  let regalosEntregados = parseInt(prompt("Cuántos regalos has estregado?"));
  if (totalRegalos - regalosEntregados < 0) {
    do {
      regalosEntregados = parseInt(
        prompt(
          "No tienes esa cantidad de regalos para entregar. Vuelve a intentar"
        )
      );
    } while (totalRegalos - regalosEntregados < 0);
  }

  totalRegalos = totalRegalos - regalosEntregados;
  pTotalRegalos.innerHTML = "Quedan " + totalRegalos + " regalos!";

  if (totalRegalos < 100 && totalRegalos != 0) {
    pTotalRegalos.innerHTML += "<br>OJO, Quedan menos de 100 regalos";
  } else if (totalRegalos == 0) {
    pTotalRegalos.innerHTML =
      "Felicidades, has entregado todos los regalos! Misión cumplida";
  }
}

let mueble = document.getElementById("mueble");

function ejercicio2() {
  let seleccion1 = prompt(
    "Prefieres una silla o una mesa? SILLA/MESA"
  ).toUpperCase();
  if (seleccion1 == "SILLA") {
    let seleccion2 = prompt(
      "Escoge una marca: MACKINTOSH / IKEA"
    ).toUpperCase();
    if (seleccion2 == "MACKINTOSH") {
      mueble.innerHTML = "Has seleccionado una fabulosa silla MACKINTOSH!";
    } else {
      mueble.innerHTML = "Has seleccionado una fabulosa silla IKEA!";
    }
  } else {
    let seleccion2 = prompt(
      "Escoge el material de tu mesa: ROBLE / IKEA"
    ).toUpperCase();
    if (seleccion2 == "ROBLE") {
      mueble.innerHTML = "Has seleccionado una fabulosa mesa de ROBLE!";
    } else {
      mueble.innerHTML = "Has seleccionado una fabulosa mesa de IKEA!";
    }
  }
}

function ejercicio3() {
  let resultado = document.getElementById("tabla");
  let maximo = parseInt(
    prompt("Ingresa el número de tablas de multiplicar que deseas")
  );
  for (let i = 1; i <= maximo; i++) {
    for (let j = 1; j <= 10; j++) {
      resultado.innerHTML += i + "x" + j + "=" + i * j + "<br>";
    }
  }
}

function descubreFrase() {
  let personaje = document.querySelector(
    'input[name="personaje"]:checked'
  ).value;
  let lugar = document.querySelector('input[name="lugar"]:checked').value;
  let animo = document.querySelector('input[name="animo"]:checked').value;
  let frase = document.getElementById("respuesta");
  let imagen= document.getElementById("respuestaImagen")
  frase.innerHTML= `<h2>${personaje} se encuentra muy ${animo} ${lugar}</h2>`

  if(personaje=="Shrek"&& animo=="enamorado"&&lugar=="en la playa")
 imagen.style.backgroundImage="url(images/papaNoel.jpg)"


}
