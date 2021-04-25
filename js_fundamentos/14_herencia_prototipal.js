function heredaDe(prototipoHijo, prototipoPadre) {//debemos asignarle un padre a prototipo hijo
  var fn = function () {}//funcion anonima que no hace nada
  fn.prototype = prototipoPadre.prototype//al prototipo de fn le asignamos el prototipo del prototipo padre
  prototipoHijo.prototype = new fn//al prototipo hijo le decimos que su prototype va a ser un nuevo objeto de la fn
  prototipoHijo.prototype.constructor = prototipoHijo//asiganmos la funcion constructora 
}

function Persona(nombre, apellido, altura) {//Debemos hacer que Desarrollador herede de Persona
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {//prototipo de desarrollador / prototipo hijo / sub-tipo de persona
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)// primero la clase hija y despues la clase padre

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}


// var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez', 1.89)