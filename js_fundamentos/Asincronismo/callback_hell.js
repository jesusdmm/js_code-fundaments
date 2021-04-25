const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = {crossDomain: true };

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function(data) {//este es el callback
        console.log(data.name);

        if(callback){ //si existe un callback lo llamamos
            callback();
        }
    })
}

obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {

        })
    })
})


