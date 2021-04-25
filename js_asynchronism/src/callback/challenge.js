//Consumir un api y hacer una peticion y obtener los elemente que trae la api, consultar el primer personaje y la dimencion a la cual pertenerce
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  //instancias a un llamada a una api
let API = 'https://rickandmortyapi.com/api/character';

//crearemos una funcion fech data que nos va a permitir traer la informacion desde nuestra api, 
//le pasaremos un callback, y haremos los llamados

const fetchData = (url_api, callback) => {

    let xhttp = new XMLHttpRequest();           //generamos la referencia al objeto que necesitamos que es xmlhttprequest
    xhttp.open('GET', url_api, true);           //utilizaremos el primer referente a xmlhttprequest, y le pasamos la peticion

    xhttp.onreadystatechange = (event) => {     //escuchamos lo que va a hacer esa conexion
                                                //si el cambio sucede entonces ejecutamos una funcion

        if(xhttp.readyState === 4) {            //4 significa que se competo
            if(xhttp.status === 200) {          //ejecutamos una siguiente llamada que nos va a permitir saber en que estado se encuentra

                callback(null, JSON.parse(xhttp.responseText)); //el primer valor que se la pasa al callback es el error y el segundo es el resultado del llamado a la api
                                                                //en este caso se le pasa null como primer parametro
                                                                //el resultado llega como texto asi que que parsea a json
            } else {                                
                const error =  new Error('Error' + url_api);    //manera correcta de crear errores
                
                return callback(error, null);                   //se envia solo el error
            }                                                   //no se esta enviando ningun resultado que se vaya a desencadenar                                                                                                                       
        }
    } 
    xhttp.send();   //se envia la solicitud
}


//hacer una peticiona a nuestra api
//obtener cuantos elementos de personaje tiene
//acceder al primer personaje
//obtener la ubicacion en la que se encuentra
//para saber en que dimension se encuentra 

//CALBACK HELL:
fetchData(API, (error1, data1) => {                             //hacemos llamado a fetch data que recibe api. callback recibe el error y el dato
    if(error1) return console.error(error1);                    //si hay un error lo mostramos en consola
    fetchData(API + data1.results[0].id, (error2, data2) => {   //en caso de que no haya error, le paso a fetchdata: los datos obtenidos, posicion results, posicion 0, obtener id
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, (error3, data3) => {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })        
})   

//DUDAS:
//por que data1, 2 y 3? no se llamo ya a la data una vez? por que llamar de nuevo?
//