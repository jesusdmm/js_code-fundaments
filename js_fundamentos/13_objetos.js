function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    if(this.altura >= 1.8){
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy alto`)
    } else {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy bajo`)
    }
} 

let jesus = new Persona('Jesus', 'Marcano', 1.79);
let sacha = new Persona('Sacha', 'Lifzsyc', 1.8);

console.log(jesus.saludar());
