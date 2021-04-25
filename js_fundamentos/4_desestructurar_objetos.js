//DESESTRUTURACION DE OBJETOS
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
};

var dario = {
  nombre: "Darío",
  apellido: "Susnisky",
  edad: 27,
};

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad() {
  // Hola, me llamo Sacha y tengo 28 años
  // Hola, me llamo Darío y tengo 27 años
}

//-------------------------------------------------

let jesus = {
    nombre: "Jesus",
    apellido: "Marcano",
    edad: 22
};
let jose = {
    nombre: "Jose",
    apellido: "Martinez",
    edad: 27
};

function imprimirNombre(persona){
    let { nombre } = persona;
    let { apellido } = persona;
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
}

imprimirNombre(jesus);
