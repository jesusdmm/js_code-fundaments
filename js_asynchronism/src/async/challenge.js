const fetchData =  require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);                              //data general de la api
        const character = await fetchData(`${API}${data.results[0].id}`);   //personaje y su nombre
        const origin = await fetchData(character.origin.url);               //origen de la dimension en la que se encuentra

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error){
        console.error(error);
    }
}

console.log('before');
anotherFunction(API);
console.log('after');