//ENTRADA DISCOTECA

let edad = parseInt(prompt("Qué edad tienes? "));
if (edad > 18) {
  document.writeln(
    "<p class=entrada>Tu edad es " +
      edad +
      " Bienvenido a la discoteca. Diviértete!" +
      "</p>"
  );
} else if (edad == 18) {
  document.writeln("<p class=entrada> Felices 18! Diviértete!</p>");
} else {
  document.writeln(
    "<p class=entrada>Eres menor de edad. Tienes " +
      edad +
      " No puedes entrar!!" +
      "</p>"
  );
}

//CINCO COLORES

let color = prompt(
  "Escoge un color: Azul, Verde, Rojo, Amarillo, Morado"
).toUpperCase();
if (color == "AZUL") {
  document.writeln(
    "<h2 id=azul> El que quiera AZUL celeste, que le cueste!" + "</h2>"
  );
} else if (color == "VERDE") {
  document.writeln(
    "<h2 id=verde> ¡Bandera VERDE! Que se anime a bailar aunque no sepa..." +
      "</h2>"
  );
} else if (color == "ROJO") {
  document.writeln(
    "<h2 id=rojo> Días negros? Labios ROJOS y mente clara!" + "</h2>"
  );
} else if (color == "AMARILLO") {
  document.writeln(
    "<h2 id=amarillo> La vida debería ser AMARILLA.... Amar Y ya!!" + "</h2>"
  );
} else if (color == "MORADO") {
  document.writeln(
    "<h2 id=morado>Si ves la vida de color MORADO, es porque te has enamorado!" +
      "</h2>"
  );
} else {
  document.writeln(
    "<h2 id=noColor> No has ingresado un color de la lista de colores. Prueba nuevamente recargando la página!" +
      "</h2>"
  );
}

//LAMPARA NO ENCIENDE

let enchufada = prompt("La lámpara está enchufada? SI/NO").toUpperCase();

if (enchufada == "NO") {
  document.writeln("<h2 id=bombilla>Enchufa la lámpara" + "</h2");
} else {
  let quemada = prompt("La bombila está quemada? SI/NO").toUpperCase();
  if (quemada == "SI") {
    document.writeln("<h2 id=bombilla>Reemplaza la bombilla" + "</h2");
  } else {
    document.writeln("<h2 id=bombilla>Compra una nueva lámpara" + "</h2");
  }
}
