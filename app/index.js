
async function getCharacter (id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}
    `)
    const json = await response.json()
    const data = Object.entries(json);
    return data
}


function pickRandom(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}
const random = parseInt(pickRandom(0, 826));


async function get () {
    const dataCharacter = await getCharacter(random); // [1][1]
    console.log('Estamos en el personaje ' + random);

    /* ###CAMBIANDO LA INFORMACIÓN DEL PERSONAJES ### */ 

    // Cambiando el nombre
    let nameDom = document.getElementById('character-name');
    nameDom.innerHTML = dataCharacter[1][1];

    // Nombre de navBar 
    let navDom = document.getElementById('nav-input');
    navDom = navDom.value;
    navDom.innerText = dataCharacter[1][1];

    // Cambiando character type 
    let typeDom = document.getElementById('character-type');
    typeDom.innerHTML = 'Type: ' + dataCharacter[3][1];

    // Cambiando character location 
    let locationDom = document.getElementById('character-location');
    locationDom.innerHTML = 'Status: ' + dataCharacter[2][1];

    // Cambiando el character info 
    let infoDom = document.getElementById('character-info');
    infoDom.innerHTML = 'Gender: ' + dataCharacter[5][1];

    //Setteando nuevas imagenes // // 
    let imageProfile = document.getElementById('profile-photo');
    let imageNav = document.getElementById('nav-image_content');

    imageProfile.src= `${dataCharacter[8][1]}`;
    imageNav.src= `${dataCharacter[8][1]}`;

}

// ### Cargando los personajes cuando ya esté listo el contenido de arriba #### //

document.addEventListener("DOMContentLoaded", get());
