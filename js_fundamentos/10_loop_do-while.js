let contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while(!llueve())

console.log(`${contador}`)