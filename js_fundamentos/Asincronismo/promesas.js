const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = {crossDomain: true };

//Las promesas con como cualquier otro objeto de js
function obtenerPersonaje(id) {//no recibe un callback sino que retorna una promesa
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        
        $
        .get(url, opts, function(data) {
            resolve(data)//la funcion resolve no ese llama hasta que el get sea exitoso
        }) 
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Error al obtener ${id}`);
}

obtenerPersonaje(1)
    .then(function(personaje) {
        console.log(`El personaje 1 es ${personaje.name}`);
    })
    .catch(onError)



