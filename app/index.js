
async function getCharacter (id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}
    `)
    const json = await response.json()
    const data = Object.entries(json);
    return data
}



async function get () {
    const nameCharacter = await getCharacter(100); // [1][1]
    // console.log(nameCharacter);

    /* ###CAMBIANDO LA INFORMACIÓN DEL PERSONAJES ### */ 
    // Cambiando el nombre
    let nameDom = document.getElementById('character-name');
    nameDom.innerHTML = nameCharacter[1][1];

    // Cambiando character type [3][1]
    let typeDom = document.getElementById('character-type');
    typeDom.innerHTML = 'Type: ' + nameCharacter[3][1];

    // Cambiando character location [2][1]
    let locationDom = document.getElementById('character-location');
    locationDom.innerHTML = 'Location: ' + nameCharacter[2][1];

    // Cambiando el character info [5][1]
    let infoDom = document.getElementById('character-info');
    infoDom.innerHTML = 'Gender: ' + nameCharacter[5][1];

    //Setteando nuevas imagenes // // 

    let imageProfile = document.getElementById('profile-photo');
    let imageNav = document.getElementById('nav-image_content');

    imageProfile.src= `${nameCharacter[8][1]}`;
    imageNav.src= `${nameCharacter[8][1]}`;

}

get()