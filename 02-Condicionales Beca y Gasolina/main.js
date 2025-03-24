//PRIMER EJERCICIO

/*let edad = parseInt(prompt("Qué edad tienes?"));
let residencia = prompt("Donde resides").toUpperCase();
let familia = prompt("Cuántos hijos tienes?");
let genio = prompt("Eres un genio de la programación? (S/N)").toUpperCase();

if (
  (edad >= 18 && residencia == "BARCELONA") ||
  (edad >= 18 && familia == 3) ||
  (edad >= 12 && edad <= 18 && genio == "SI")
) {
  alert("Felicidades, Has ganado una beca");
} else {
  alert("Lo siento, no accedes a una beca");
}*/

// PRIMER EJERCICIO
// Requisito 1: Que sea mayor o igual a 18 años y resida en Barcelona
// Requisito 2: Que sea mayor de 30 años y tenga familia numerosa
// Requisito 3: Que tenga entre 12 y 18 años y sea un geni@ de la programación

let edad = parseInt(prompt("Qué edad tienes?"));
if (edad >= 18 && edad <= 30) {
  let residencia = prompt("En donde vives?").toUpperCase();
  if (residencia == "BARCELONA") {
    alert("Felicidades, Has ganado una beca!");
  } else {
    alert("Lo siento, no accedes a una beca");
  }
} else if (edad > 30) {
  let familia = prompt("Eres familia numerosa? (S/N)").toUpperCase();
  if (familia == "S") {
    alert("Felicidades, Has ganado una beca");
  } else {
    alert("Lo sentimos, NO has ganado una beca");
  }
} else if (edad >= 12) {
  let genio = prompt("Eres un genio de la programación? (S/N)").toUpperCase();
  if (genio == "S") {
    alert("Felicidades, Has ganado una beca");
  }
} else {
  alert("Lo siento, no accedes a una beca");
}

//SEGUNDO EJERCICIO
/*Oh! Estás aparcado en la calle, pero el coche no arranca...

Si vives cerca AND tienes ganas de caminar, te vas andando y ya lo arreglarás mañana. Si no, realiza las siguientes comprobaciones:
           - Tiene gasolina?
                        * No => hay que poner gasolina
                                  - Tienes dinero?
                                 • Si => poner gasolina
                                 • No => vas en metro
                          * Sí que tiene gasolina:
                                  - Tiene batería?
                                               * No => recargar batería
                                               * Sí => pásate por el mecánico*/

let vivesCerca = prompt("Vives cerca? (S/N)").toUpperCase();
let ganasCAminar = prompt("Tienes ganas de caminar? (S/N)").toUpperCase();

if (vivesCerca == "S" && ganasCAminar == "S") {
  alert("Me voy andando y lo arreglo mañana");
} else {
  let gasolina = prompt("Tienes gasolina? (S/N)").toUpperCase();
  if (gasolina == "S") {
    let bateria = prompt("Tiene bateria? (S/N)").toUpperCase();
    if (bateria == "S") {
      alert("Pásate por el mecánico");
    } else {
      alert("Recargar batería");
    }
  } else {
    let dinero = prompt("Tienes dinero? (S/N)").toUpperCase();
    if (dinero == "S") {
      alert("Hay que poner gasolina");
    } else {
      alert("Me en metro");
    }
  }
}

//TERCER EJERCICIO
//Verifica si un número es positivo par y mayor que 100

let numero = prompt("Ingresa un número");
if (numero % 2 == 0) {
  if (numero > 100) {
    alert("El número es par y es mayor de 100");
  }
  alert("El número es par pero no es mayor de 100");
} else {
  alert("El número no es par");
}
