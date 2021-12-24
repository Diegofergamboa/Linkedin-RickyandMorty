/* Importar API */
class API {
    importData() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then((response) => response.json())
            .then((data) => {
                getCharacter(data);
            })
            .catch(err => console.error(err));
    }
}

function getCharacter(data) {
    console.log(data[1].info);
}


