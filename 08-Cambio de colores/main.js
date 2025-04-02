const elemento1 = document.querySelector("#boton1");
const caja = document.querySelector("#caja");
const texto = document.querySelector("h3");
const circulo = document.querySelector(".circulo");
const mensaje = document.getElementById("message").classList;

function rojo() {
  caja.style.backgroundColor = "red";
}

function verde() {
  texto.style.color = "green";
}

function azul() {
  circulo.style.backgroundColor = "blue";
}

function descubre() {
  mensaje.add("color");
  mensaje.add("size");
}

function limpiar(){
  window.location.reload();
}
