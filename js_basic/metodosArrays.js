//Hay 2 tipos de metodos, los que son para mutar el contenido y los que son para recorrerlo


var articulos = [//Array de objetos
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
]

//Filtrar ciertas cosas validando true o false sin modificar el array original
var articulosFiltrados = articulos.filter(function(articulo){//como parametro le doy el articulo que vaya filtrando
    return console.log(articulo.costo <= 500);
});

//Mapear cierto articulos
var nombreArticulos = articulos.map(function(articulo){
    return console.log(articulo.nombre);
});

//Para encontrar algo dentro del array
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop";
});

//Para recorrer el array sin modificarlo
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Para regresar una validacion de truo o false para articulos que cumplan con esa validacion
var articulosBaratos = articulo.some(function(articulo){
    return articulos.costo <= 700;
    //devuelve solamente true, porque solo decuelve especificamente si se cumple la condicion, y no los articulos
});

// .push() nos permite agregar uno o más elementos al final de un array.

// .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.