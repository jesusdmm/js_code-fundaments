
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros: 111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 78
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 132
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 90
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 91
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 182
}

//EJEMPLO 1-------------------------------------------------
var personas = [sacha, alan, martin, dario, vicky, paula]

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura}mts`)
}

//EJEMPLO 2-------------------------------------------------
const esAlta = ({ altura }) => altura > 1.8//va recibiendo cada elemento del array y retorna si el elemento cumple la condicion
// const esAlta = persona => persona.altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

//filter devuelve un nuevo array
var personasAltas = personas.filter(esAlta)//filter siempre recibe una condicion
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

console.log(personasAltas)

//EJEMPLO 3-------------------------------------------------
var personas = [sacha, alan, martin, dario, vicky, paula]

const esAlta = ({ altura }) => altura > 1.8
var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({//no se coloca return porque las llaves estan dentro de parentesis
    ...persona,//nos devuelve un nuevo objeto con la persona desglozada
    altura: persona.altura * 100//pero vamos a pisar la altura
    // persona.altura = persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)//map modfica devuelve un nuevo array con elementos modificados

console.log(personasCms)

//EJEMPLO 4--------------------------------------------------------------------
var personas = [sacha, alan, martin, dario, vicky, paula]

// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)