// var miAuto = {
//     //objeto
//     marca: "Toyota",
//     modelo: "Corolla",
//     annio: 2020,
//     detalleDelAuto: function () {
//         console.log(`Auto ${this.modelo} ${this.annio}`); //this hace referencia al objeto (en este contexto)
//     },
// };

function auto(marca, modelo, annio){//mi funcion auto va a tener como parametro las propiedades que tendra mi objeto
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);//operador new con referencia a la funcion constructora
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Tesla", "Model X", 2018);

console.log(autoNuevo2);
