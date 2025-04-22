let anuncio = document.getElementById("popUp");
let cerrar = document.getElementById("x");
let caja = document.getElementById("caja");
let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
let caja3 = document.getElementById("caja3");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

cerrar.addEventListener("click", cerrarVentana);

let time1 = 0;
let time2 = 3000;
let time3 = 5000;

setTimeout(function () {
  anuncio.style.display="block"
}, 4000);

for (let i = 0; i <= 100; i++) {
  setTimeout(function () {
    yellow.style.backgroundColor = "gray";
    green.style.backgroundColor = "grey";
    red.style.backgroundColor = "red";
  }, time1);

  setTimeout(function () {
    red.style.backgroundColor = "grey";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "grey";
  }, time2);

  setTimeout(function () {
    red.style.backgroundColor = "grey";
    yellow.style.backgroundColor = "grey";
    green.style.backgroundColor = "green";
  }, time3);
  time1 = time1 + 8000;
  time2 = time2 + 8000;
  time3 = time3 + 8000;
}

function popUp() {
  anuncio.style.display = "block";
}

function cerrarVentana() {
  anuncio.style.display = "none";
}

function toggleCajas() {
  if (document.getElementById("toggleCajas").checked == true) {
    moverCajas();
  } else {
    pararCajas();
  }
}

function moverCajas() {
  setTimeout(function () {
    var cajas = document.getElementsByClassName("caja");
    for (const caja of cajas) {
      caja.style.animationPlayState = "paused";
    }
  }, 4000);
  var cajas = document.getElementsByClassName("caja");
  for (let caja of cajas) {
    caja.style.animationPlayState = "running";
  }
}

function pararCajas() {
  var cajas = document.getElementsByClassName("caja");
  for (let caja of cajas) {
    caja.style.animationPlayState = "paused";
  }
}

function pausarCaja(cajaDiv) {  
  cajaDiv.style.animationPlayState = "paused";
}
