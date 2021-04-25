const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'; 

//primera peticion, el count para saber cuantos personajes tenemos 
//traer el llamado del primer elemento hacia lo que es el nombre del personaje
//del resultante del personaje debemos traer la dimension para sacar el nombre de esa dimension

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    }) 
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));