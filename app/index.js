/* Importar API */
url_API = 'https://rickandmortyapi.com/api/character/';

fetch('url_API')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch(err => console.error(err));

s