let numeroRandom = generarRandom();
let totalIntentos = 1;
let intentosPrevios = document.getElementById("intentosPrevios");
let sumatoria1 = document.getElementById("sumatoria");
let dado1 = document.getElementById("dado");
let sumatoria2 = document.getElementById("sumatoria2");
let dado2 = document.getElementById("dado2");
let final = document.getElementById("final");
let sumaJugador1 = 0;
let sumaJugador2 = 0;
let contador1 = 0;
let contador2 = 0;

function suerte() {
  let seguir;
  let signo = document.getElementById("signo");
  let mensaje = document.getElementById("suerteRespuesta");
  switch (signo.value.toUpperCase()) {
    case "LEO":
      mensaje.innerHTML =
        "Es una semana muy afortunada para ti. Aprovéchala y trata de poner en marcha tus planes y proyectos porque vas a estar protegido por el Cosmos y es el momento de poner a trabajar tu creatividad y arriesgarte con cosas nuevas.";
      break;
    case "ARIES":
      mensaje.innerHTML =
        "La relación será apasionada y apasionante, pero nada tranquila. De igual manera, se amarán locamente viviendo instantes mágicos, que se odiarán. Eso sí, ninguno de los dos conoce lo que es el rencor y vivirán apasionadas reconciliaciones. ";
      break;
    case "CANCER":
      mensaje.innerHTML =
        "El planeta Marte en tu signo te apoya con su energía para que no desfallezcas y veas la luz en lo que te parecía un callejón sin salida. Puede llegar alguien a tu vida en quien podrás confiar y que te ayudará en tus propósitos. ";
      break;
    case "PISCIS":
      mensaje.innerHTML =
        "Fantaseas con un futuro profesional distinto y por fin vas a tener la oportunidad de emprender un nuevo rumbo que te hará feliz. Venus en tu signo potencia tu poder de seducción y te ofrece un momento muy positivo para tus relaciones.";
      break;
    case "ESCORPIO":
      mensaje.innerHTML =
        "No permitas que ninguna circunstancia te frene porque ahora tienes la oportunidad de realizar algo que deseas mucho. El planeta Marte bien aspectado te empuja a tomar la iniciativa y a moverte para que no se te escape lo que quieres.";
      break;
    case "SAGITARIO":
      mensaje.innerHTML =
        "Has estado peleando mucho y esta semana vas a poder disfrutar como tú sabes y darte todos los caprichos que mereces. Puede haber un cambio en tu vida que te ponga en el camino adecuado para conseguir tus objetivos. ";
    case "LIBRA":
      mensaje.innerHTML =
        "Comienzas a tener confianza en tus posibilidades y vuelve la calma tu vida, que la estabas necesitando. Has vivido cambios fuertes e intensos y ahora vas a poder disfrutar de tus merecidos logros. Estás deseoso de mejorar tu economía, y a poco que hagas lo conseguirás.";
      break;
    case "ACUARIO":
      mensaje.innerHTML =
        "A pesar de los inconvenientes que te rodean, es el momento de apostar alto, porque vienen cambios positivos a los que tienes que sacarles partido. Si quieres que haya felicidad y progreso en tu vida, huye de los conflictos y evita los enfrentamientos. De lo que se trata ahora es de simplificar tu vida. ";
      break;
    default:
      mensaje.innerHTML = "El signo ingresado es incorrecto!";
  }
}

function comprobarNumero(numeroRandom, intento) {
  if (numeroRandom == intento) {
    iguales = 0;
  } else if (intento <= numeroRandom) {
    iguales = -1;
  } else {
    iguales = 1;
  }
  return iguales;
}

function generarRandom() {
  return parseInt(Math.random() * 20 + 1);
}

function ejercicio2() {
  let intento = parseInt(document.getElementById("number").value);
  let mensaje = document.getElementById("numeroRespuesta");
  let resultado = comprobarNumero(numeroRandom, intento);
  let intentosPrevios = document.getElementById("intentosPrevios");
  if (resultado == 0) {
    mensaje.innerHTML =
      "Has adivinado el número! FELICIDADES </br> Has usado " +
      totalIntentos +
      " intentos";
  } else {
    if (resultado == -1) {
      mensaje.innerHTML = "El número secreto es mayor que " + intento + "<br>";
    } else {
      mensaje.innerHTML = "El número secreto es menor que " + intento + "<br>";
    }
    if (totalIntentos > 1) {
      intentosPrevios.innerHTML += ", ";
    }
    intentosPrevios.innerHTML += intento;
  }
  totalIntentos++;
}

function ejercicio3(jugador) {
  let numeroRandom = parseInt(Math.random() * 6 + 1);

  if (jugador == "jugador 1") {
    if (contador1 <= 4) {
      dado1.innerHTML = numeroRandom;
      sumaJugador1 += numeroRandom;
      sumatoria1.innerHTML = sumaJugador1;
      contador1++;
    } else {
      alert("Has excedido el número máximo de intentos");
    }
  } else {
    if (contador2 <= 4) {
      dado2.innerHTML = numeroRandom;
      sumaJugador2 += numeroRandom;
      sumatoria2.innerHTML = sumaJugador2;
      contador2++;
    } else {
      alert("Has excedido el número máximo de intentos");
    }
  }
  if (contador1 == 5 && contador2 == 5) {
    if (sumaJugador1 > sumaJugador2) {
      final.innerHTML = "Ha ganado el jugador 1";
    } else final.innerHTML = "Ha ganado el jugador 2";
  }
}
