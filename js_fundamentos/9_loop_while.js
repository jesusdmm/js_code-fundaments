let jesus = {
    nombre: 'Jesus',
    apellido: 'Marcano',
    edad: 22,
    peso: 63
}

console.log(`Al inicio del año ${jesus.nombre} pesa ${jesus.peso}Kg`);

// function aumentarDePeso(persona) {
//     return persona.peso += 200;
// }

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = jesus.peso - 3;
let dias = 0;

while(jesus.peso > META) {
    if(comeMucho()) {
        aumentarDePeso(jesus);
    }
    if (realizaDeporte()) {
        adelgazar(jesus);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${jesus.nombre} adelgazo 3kg`);