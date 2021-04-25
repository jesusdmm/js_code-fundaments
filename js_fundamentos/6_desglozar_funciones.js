//DESGLOZAR FUNCIONES ES FUNCIONES MAS PEQUEÑAS
let sacha = {
    nombre: "Sacha",
    edad: 28,
    profesion: "ingeniero"
};

let jesus = {
    nombre: "Jesus",
    edad: 17
};

const MAYORIA_DE_EDAD = 18;

function mayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
    if(mayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
} 

imprimirSiEsMayorDeEdad(jesus);
//imprime jesus es menor de edad