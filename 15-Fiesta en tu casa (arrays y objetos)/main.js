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
let listaAgregada = document.getElementById("listaAgregada");
let nuevaListaParrafo = document.getElementById("nuevaLista");
let listaNuevaOrdenada = document.getElementById("listaNuevaOrdenada");

const artistas = [
  "ROBERTO",
  "CARLA ",
  "SEBAS",
  "LAURA",
  "VICTOR",
  "ALEJANDRO",
  "DAYA",
];
let nuevaLista = [];

const invitados = ["LUIS", "ALBERT ", "JORDI", "ELIZABETH"];

imprimir(artistas);
function imprimir(lista) {
  for (let i = 0; i < lista.length; i++) {
    listaDeArtistas.innerHTML += [i + 1] + ".- " + lista[i] + "<br>";
  }
}

function buscarArtistaPorId() {
  if (artistas[parseInt(findById.value - 1)] == undefined) {
    nombreArtista.innerHTML =
      "El invitado con el id " + findById.value + " no existe";
  } else {
    nombreArtista.innerHTML = artistas[parseInt(findById.value - 1)];
  }
}

function buscarArtistaPorName() {
  let position;
  position = artistas.indexOf(findByName.value.toUpperCase());
  if (artistas[position] == undefined) {
    indiceArtista.innerHTML = "El invitado " + findByName.value + " no existe";
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
    artistaCreado.innerHTML = "Se ha agregado el invitado!";
    imprimir(artistas);
  } else {
    artistaCreado.innerHTML = "El invitado  " + artistaName.value + " ya existe.";
    imprimir(artistas);
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
    artistaEditado.innerHTML = "Se ha actualizado el invitado!";
  } else {
    artistaEditado.innerHTML = "El ID del invitado no existe";
  }
  imprimir(artistas);
}

function eliminarArtista() {
  listaDeArtistas.innerHTML = "";
  artistas.splice(parseInt(indiceAEliminar.value) - 1, 1);
  artistaEliminado.innerHTML = "Se ha eliminado el invitado!";
  imprimir(artistas);
}

function agregarInvitados() {
  listaDeArtistas.innerHTML = "";
  nuevaLista = artistas.concat(invitados);
  listaAgregada.innerHTML +=
    "Se han agregado los invitados de la otra fiesta a la lista";
  imprimir(nuevaLista);
}

function ordenarLista() {
  nuevaLista.sort();
  for (let i = 0; i < nuevaLista.length; i++) {
    nuevaListaParrafo.innerHTML += [i + 1] + ".- " + nuevaLista[i] + "<br>";
  }
  listaNuevaOrdenada.innerHTML += "Se ha ordenado e impreso la nueva lista";
}

//EJERCICIO2

let portatil = document.getElementById("portatil");
let portatil2 = document.getElementById("portatil2");
let portatil3 = document.getElementById("portatil3");

const ordenador1 = {
  marca: "HP",
  procesador: "i7",
  ram: "16 Gb",
  hd: "1Tb",
  precio: 1500,
  extras: {
    camara: "Cámara HD",
    microfono: "Microfono stereo",
    disco: "Disco de acceso rápido",
  },
  maletin: true,
};

portatil.innerHTML =
  "Mi ordenador es de marca " +
  ordenador1.marca +
  " con procesador " +
  ordenador1.procesador +
  " y " +
  ordenador1.ram +
  " de ram.";

imprimirObjeto(ordenador1);

function imprimirObjeto(objeto) {
  for (const propiedad in objeto) {
    if (typeof objeto[propiedad] === "object") {
        portatil2.innerHTML += `${propiedad} : {<br>`;        
        imprimirObjeto(objeto[propiedad])
        portatil2.innerHTML += `}<br>`;        
    } else {
      portatil2.innerHTML += `${propiedad} : ${objeto[propiedad]} <br>`;
    }
  }
}

portatil3.innerHTML =
  "El tercer extra del ordenador es: " + ordenador1.extras.disco;

// EJERCICIO 3

let galleta1 = document.getElementById("galleta1");
let galleta2 = document.getElementById("galleta2");
let galleta3 = document.getElementById("galleta3");
let galleta4 = document.getElementById("galleta4");
let galleta5 = document.getElementById("galleta5");
let galleta6 = document.getElementById("galleta6");

const galletas = {
  marca: "Artiach",
  nombre: "Chiquilín",
  descripción: "Galletas de mantequilla",
  precio: 2.75,
  hayExistencias: true,
};

galleta1.innerHTML = "Objeto con características iniciales:" + "<br>" + "<br>";
for (const propiedad in galletas) {
  galleta1.innerHTML += `${propiedad} : ${galletas[propiedad]} <br>`;
}

galletas.oferta = true;
galleta2.innerHTML = "Se ha agregado la propiedad OFERTA" + "<br>" + "<br>";
for (const propiedad in galletas) {
  galleta2.innerHTML += `${propiedad} : ${galletas[propiedad]} <br>`;
}

galletas.descripción = "Galletas de chocolate";
galleta3.innerHTML =
  "Se ha agregado modificado la descripción" + "<br>" + "<br>";
for (const propiedad in galletas) {
  galleta3.innerHTML += `${propiedad} : ${galletas[propiedad]} <br>`;
}

delete galletas.marca;
galleta4.innerHTML = 'Se ha eliminado la propiedad "marca"' + "<br>" + "<br>";
for (const propiedad in galletas) {
  galleta4.innerHTML += `${propiedad} : ${galletas[propiedad]} <br>`;
}

galleta5.innerHTML = "Imprimiendo únicamente los valores...." + "<br>";
for (const propiedad in galletas) {
  galleta5.innerHTML += `${galletas[propiedad]} <br>`;
}

galleta6.innerHTML = "Imprimiendo únicamente las propiedades...." + "<br>";
for (const propiedad in galletas) {
  galleta6.innerHTML += `${propiedad} <br>`;
}
