/* Importar API */

class API {
    getCharacter(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
}

API();
console.log(API.getCharacter(1));