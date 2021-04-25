//FUNCIONES
var daniel = {
    nombre: "daniel",
    edad: 21,
  },
  david = {
    nombre: "david",
    edad: 17,
  };
function mayorDeEdad({ nombre, edad }) {
  console.log(`{${nombre} es ${edad >= 18 ? "mayor" : "menor"} 
 de edad`);
}