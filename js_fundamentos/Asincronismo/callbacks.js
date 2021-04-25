const API_URL = "https://swapi.dev/api/";//url a la cual queremos acceder
const PEOPLE_URL = "people/:id";//parte de las personas en la apo

//PARAMETROS DE LA FUNCION $.get
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;//replace es el metodo que tiene todos los strings
const opts = {crossDomain: true };//le indicamos a jquery que el request se hace a otra pagina, corss


//PARAMETROS QUE LLEGAN CUANDO JQUERY REALIZA EL REQUEST POR EL METODO GET 
//$.get(lukeUrl, opts, onResponse); hacemos un request con jquery llamando al metodo get
//el get se encargar de llamar al callback si el request de $ es success
//el callback se llama con los datos que nos manda el request de respuesta de $.get
//el callback recibe 3 parametros al finalizar el request: data, success, jqXHR(objeto del request de js), a nosotros nos interesa data (para ver los parametros podemos usar la var arguments)


const onResponse = function(data) {//funcion de callback//solo se va a ejecutar si el request es success, y la ejecuta get
    console.log(data.name);
};

//$.get(url, opts, onResponse)


function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onResponse)
}

//No sabemos en que orden nos llegaran los request
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);

// $.get(lukeUrl, options, function () {
//     console.log(arguments);//arguments es una variable que tiene todas las funciones, y nos va a dar un array con los parametros que recibe la funcion
// })

