var miAuto = {//objeto
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);//this hace referencia al objeto (en este contexto)
    }
};

console.log(miAuto.marca);
miAuto.detalleDelAuto();