
async function getCharacter (id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}
    `)
    const json = await response.json()
    const data = Object.entries(json);
    return data
}

function pickRandom () {
    return parseInt(Math.random(0,827));
}

async function get () {
    const dataCharacter = await getCharacter(100); // [1][1]
    // console.log(nameCharacter);

    /* ###CAMBIANDO LA INFORMACIÓN DEL PERSONAJES ### */ 

    // Cambiando el nombre
    let nameDom = document.getElementById('character-name');
    nameDom.innerHTML = dataCharacter[1][1];

    // Cambiando character type [3][1]
    let typeDom = document.getElementById('character-type');
    typeDom.innerHTML = 'Type: ' + dataCharacter[3][1];

    // Cambiando character location [2][1]
    let locationDom = document.getElementById('character-location');
    locationDom.innerHTML = 'Location: ' + dataCharacter[2][1];

    // Cambiando el character info [5][1]
    let infoDom = document.getElementById('character-info');
    infoDom.innerHTML = 'Gender: ' + dataCharacter[5][1];

    //Setteando nuevas imagenes // // 
    let imageProfile = document.getElementById('profile-photo');
    let imageNav = document.getElementById('nav-image_content');

    imageProfile.src= `${dataCharacter[8][1]}`;
    imageNav.src= `${dataCharacter[8][1]}`;

}

get()