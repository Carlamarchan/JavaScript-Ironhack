function ejercicio1() {
  let seguir;
  do {
    const numero1 = parseInt(prompt("Ingresa el primer número"));
    const numero2 = parseInt(prompt("Ingresa el segundo número"));
    const suma = numero1 + numero2;
    alert("la suma de los 2 números es " + suma);
    seguir = prompt("Deseas volver a sumar? S/N").toUpperCase();
  } while (seguir == "S");
  alert("Gracias por participar! Hasta pronto");
}

function ejercicio2() {
  let totalIntentos = 0;
  let colorSecreto;
  let color;
  let colorInput = document.getElementById("colorInput");
  switch (colorInput.value) {
    case "1":
      colorSecreto = "AMARILLO";
      break;
    case "2":
      colorSecreto = "VERDE";
      break;
    case "3":
      colorSecreto = "AZUL";
      break;
    case "4":
      colorSecreto = "ROJO";
      break;
    case "5":
      colorSecreto = "VIOLETA";
      break;
    default:
      colorSecreto = "NINGUNO";
  }

  do {
    color = prompt("Prueba a adivinar el color de la lista").toUpperCase();
    totalIntentos++;
  } while (color != colorSecreto && color != "SALIR");
  if (color != "SALIR") {
    alert(
      "Perfecto! Has adivinado el color secreto en el " +
        totalIntentos +
        "º" +
        " intento"
    );
  } else {
    alert(
      "Lo siento, no has adivinado el color secreto. Lo has intentado " +
        totalIntentos +
        " veces"
    );
  }
}

function ejercicio3() {
  const user = "carla123";
  const pass = "1234";
  let contador = 0;
  let username;
  let password;
  do {
    username = prompt("Ingresa tu usuario");
    password = prompt("Ingresa tu contraseña");
    contador++;
  } while (username != user && password != pass && contador != 3);
  if(contador<3){
    window.open("https://www.linkedin.com/in/carla-marchan/");
  }
  else alert("Has exedido el número máximo de intentos. Vuelve a intentar")
}
