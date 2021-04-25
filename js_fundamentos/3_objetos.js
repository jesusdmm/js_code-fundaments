//OBJETOS
var sacha = {
  nombre: "Sacha",//clave y valor
  apellido: "Lifszyc",
  edad: 28,
};

var dario = {
  nombre: "Darío",
  apellido: "Susnisky",
  edad: 27,
};

function imprimirNombreEnMayusculas({ nombre }) {//Obtenemos el atributo nombre del objeto que nos llegue
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: "Gomez" });