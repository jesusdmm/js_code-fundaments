//PARAMETROS COMO REFERENCIA O COMO VALOR (Pasar objetos como parametros)??
 var sacha = {
   nombre: "Sacha",
   apellido: "Lifszyc",
   edad: 28,
 }
 var dario = {
   nombre: "Darío",
   apellido: "Susnisky",
   edad: 27,
 }
 function imprimirNombreEnMayusculas(persona) {
   // var nombre = persona.nombre
   var { nombre } = persona;
   console.log(nombre.toUpperCase());
 }
 
 imprimirNombreEnMayusculas(sacha);
 imprimirNombreEnMayusculas(dario);
 // imprimirNombreEnMayusculas({ nombre: 'Pepito' })
 // imprimirNombreEnMayusculas({ apellido: 'Gomez' }

function cumpleanos1(persona){//si pasamos un objeto como parametro, este se vera modificado fuera de la funcion, se causaria un efecto de lado
    persona.edad += 1;
}

// cumpleanos1(sacha);
// console.log(sacha);
// cumpleanos1(sacha);
// console.log(sacha);

function cumpleanos2(persona){//para evitar que se modifique el objeto original podemos mas bien crear un nuevo objeto, esta funcion nos va a devolver un nuevo objeto
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

sachaViejo = cumpleanos2(sacha);
cumpleanos2(sacha);
console.log(sachaViejo);
console.log(sacha);