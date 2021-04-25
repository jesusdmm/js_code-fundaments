//ALCANCE DE LAS FUNCIONES
var nombre1 = 'Sacha';
var nombre2 = 'Jesus';
//nombre existe en el alcance global, y tambien en el alcance local pero con otro valor
function imprimirNombre(nombre) {
  // window.nombre;
  nombre = nombre.toUpperCase();
  console.log(nombre);
}
imprimirNombre(nombre1);
imprimirNombre(nombre2);
 