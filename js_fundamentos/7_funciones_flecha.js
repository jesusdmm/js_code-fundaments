//FUNCIONES FLECHA
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

// const mayorDeEdad = function(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

//cuando hay un solo parametro se pueden obviar los parentesis
//si lo unico que hace es retornar algo, se puede obviar el return y los parentesis   
//como lo que nos importa es la edad, podemos desestructurar el bojeto
const mayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;


// function imprimirSiEsMayorDeEdad(persona) {
//     if(mayorDeEdad(persona)) {
//         console.log(`${persona.nombre} es mayor de edad`)
//     } else {
//         console.log(`${persona.nombre} es menor de edad`)
//     }
// }

const imprimirSiEsMayorDeEdad = ({ nombre, edad }) => {
    mayorDeEdad({ nombre, edad })
    ? console.log(`${nombre} es mayor de edad`) 
    : console.log(`${nombre} es menor de edad`);
}

imprimirSiEsMayorDeEdad(jesus);

// function permitirAcceso(persona) {
//     if (!mayorDeEdad(persona)) {
//         console.log("ACCESO DENEGADO");
//     } else {
//         console.log(`ACCESO CORRECTO`);
//     }
// }

const permitirAcceso = ({ edad }) => {
    !mayorDeEdad({ edad })
    ? console.log("ACCESO DENEGADO")
    : console.log(`ACCESO CORRECTO`);
}

permitirAcceso(jesus);


