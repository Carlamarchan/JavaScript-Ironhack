let listaDeArtistas = document.getElementById("listaDeArtistas");
let artistaIndice = document.getElementById("addArtista");
let artistaName = document.getElementById("addArtistaName");
let indiceAEliminar = document.getElementById("eliminarArtista");
let animal3 = document.getElementById("changeAnimal3");
let nombreArtista = document.getElementById("nombreArtista");
let indiceArtista = document.getElementById("indiceArtista");
let findById = document.getElementById("findById");
let findByName = document.getElementById("findByName");
let artistaCreado = document.getElementById("artistaCreado");
let changeArtistaId = document.getElementById("changeArtista");
let changeArtistaName = document.getElementById("changeArtistaName");
let artistaEditado = document.getElementById("artistaEditado");
let artistaEliminado = document.getElementById("artistaEliminado");

const artistas = [
  "THE BEATLES",
  "MADONA",
  "IMAGINE DRAGONS",
  "SHAKIRA",
  "TEDDY SWIMS",
  "BRUNO MARS",
  "REIK",
];

imprimir();
function imprimir() {
  for (let i = 0; i < artistas.length; i++) {
    listaDeArtistas.innerHTML += [i + 1] + ".- " + artistas[i] + "<br>";
  }
}

function buscarArtistaPorId() {
  if (artistas[parseInt(findById.value - 1)] == undefined) {
    nombreArtista.innerHTML =
      "El artista con el id " + findById.value + " no existe";
  } else {
    nombreArtista.innerHTML = artistas[parseInt(findById.value - 1)];
  }
}

function buscarArtistaPorName() {
  let position;
  position = artistas.indexOf(findByName.value.toUpperCase());
  if (artistas[position] == undefined) {
    indiceArtista.innerHTML = "El artista " + findByName.value + " no existe";
  } else {
    indiceArtista.innerHTML =
      artistas.indexOf(findByName.value.toUpperCase()) + 1;
  }
}

function crearArtista() {
  listaDeArtistas.innerHTML = "";
  if (artistas.indexOf(artistaName.value.toUpperCase()) == -1) {
    artistas.splice(
      parseInt(artistaIndice.value) - 1,
      0,
      artistaName.value.toUpperCase()
    );
    artistaCreado.innerHTML = "Se ha creado el artista!";
    imprimir();
  } else {
    artistaCreado.innerHTML = "El artista " + artistaName.value + " ya existe.";
    imprimir();
  }
}

function editarArtista() {
  listaDeArtistas.innerHTML = "";

  if (artistas[parseInt(changeArtistaId.value - 1)] != undefined) {
    artistas.splice(
      parseInt(changeArtistaId.value) - 1,
      1,
      changeArtistaName.value.toUpperCase()
    );
    artistaEditado.innerHTML = "Se ha actualizado el artista!";
  } else {
    artistaEditado.innerHTML = "El ID del artista no existe";
  }
  imprimir();
}

function eliminarArtista() {
  listaDeArtistas.innerHTML = "";
  artistas.splice(parseInt(indiceAEliminar.value) - 1, 1);
  artistaEliminado.innerHTML = "Se ha eliminado el artista!";
  imprimir();
}
// function imprimir(respuesta) {
//   for (let i = 0; i < animales.length; i++) {
//     if (i <= animales.length - 2) {
//       respuesta.innerHTML += animales[i] + ", ";
//     } else respuesta.innerHTML += animales[i];
//   }
// }

// function ejercicio1() {
//   imprimir(respuestaej1);
//   animales[7] = animal1.value;
//   animales[8] = animal2.value;
//   imprimir(respuestaej2);
//   animales[3] = animal3.value;
//   imprimir(respuestaej3);
//   animales.pop();
//   imprimir(respuestaej4);
//   respuestaej5.innerHTML += animales.length;
// }
