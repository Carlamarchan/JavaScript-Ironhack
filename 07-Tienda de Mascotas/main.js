const imagen = document.getElementById("imagen");
const resultado = document.getElementById("resultado");
const animal = document.getElementsByName("animal");

function mostrarAnimal() {
  for (let i = 0; i < animal.length; i++) {
    if (animal[i].checked) {
      let nombreAnimal = animal[i].value;
      let urlImagen = obtenerImagenPorNombre(nombreAnimal);
      imagen.style.backgroundImage = urlImagen;
      let frase=obtenerFrasePorNombre(nombreAnimal)
      resultado.style.backgroundColor= "white"
      resultado.style.fontSize="40px"
      resultado.innerHTML=frase
    }
  }
}

function obtenerImagenPorNombre(nombreAnimal) {
  switch (nombreAnimal) {
    case "perro":
      return "url(images/Luna.jpeg)";
    case "gato":
      return "url(images/gato.jpg)";
    case "camello":
      return "url(images/camello.jpg)";
    case "caballo":
      return "url(images/caballo.jpg)";
    case "cocodrilo":
      return "url(images/cocodrilo.jpg)";
    case "leon":
      return "url(images/leon.jpg)";
  }
}

function obtenerFrasePorNombre(nombreAnimal) {
    switch (nombreAnimal) {
      case "perro":
        return "No hay mejor huella para el corazón, que las patitas de un perro."
      case "gato":
        return "Cuando conectas con tu gato, las palabras sobran."
      case "camello":
        return "Respetar a los animales es una obligación; amarlos, un privilegio";
      case "caballo":
        return "En los ojos de los animales hay más bondad que en muchas personas";
      case "cocodrilo":
        return "El alma es la misma en todas las criaturas aunque el cuerpo sea diferente";
      case "leon":
        return "Un león no necesita presumir su poder. Le basta su presencia";
    }
  }
