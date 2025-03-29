let estatura = document.getElementById("altura");
let peso = document.getElementById("peso");
let respuesta = document.getElementById("respuestaPeso");

function calcular() {
  let total = peso.value / estatura.value ** 2;
  if (total < 18.5) {
    respuesta.innerHTML = "Estás por debajo del peso recomendado";
  } else if (total < 24.9) {
    respuesta.innerHTML = "Estás en un peso normal";
  } else {
    respuesta.innerHTML = "Estás por encima del peso recomendado";
  }
}

let fecha = document.getElementById("fecha");
let puntaje = document.getElementById("puntaje");
let asiento = document.getElementById("asiento");
let fechaRespuesta = document.getElementById("textoFila2");
let puntajeRespuesta = document.getElementById("textoFila4");
let asientoRespuesta = document.getElementById("textoFila6");

function llenarTicket() {
  fechaRespuesta.innerHTML = fecha.value;
  puntajeRespuesta.innerHTML = puntaje.value;
  asientoRespuesta.innerHTML = asiento.value;
  document.getElementById("ticket").style.display = "block";
}

