// 1. Imprime los números entre 20 y 50, ambos incluidos, en orden DESCENDENTE
for (let i = 50; i >= 20; i--) {
  document.writeln("El valor de i es: " + i + "<br>");
}

// 2. Imprime los números pares entre dos números que introduzca el usuario
let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");

for (let i = numero1; i <= numero2; i++) {
  if (i % 2 == 0) {
    document.writeln(i);
  }
}
document.writeln("<br>");

// 3. Carrito de la compra: se le pide al usuario el precio de 5 productos. Se calcula el total. En el caso de sumar 100 euros o más, se le da un descuento del 15%. Imprimir en tal caso el precio original y el precio final con el descuento. Si no, solo el precio total. Nota: te servirá crear una variable que vaya acumulando el precio total a medida que se vayan introduciendo precios.
let total = 0;
for (let i = 0; i < 5; i++) {
  let precio = parseInt(
    prompt("Ingrese el precio del " + (i + 1) + "º Producto")
  );
  total = total + precio;
}
if (total >= 100) {
  document.writeln(
    "El precio de los productos en total es: " + total + "</br>"
  );
  document.writeln("Ha obtenido un descuento!!!.</br>");
  document.writeln(
    "El precio de los productos con el descuento es: " + (total-(total * 0.15))
  );
} else {
  document.writeln("El precio de los productos en total es: " + total);
}
