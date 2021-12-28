
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
    // let nameDom = document.getElementById('character-name');
    // nameDom.innerHTML = nameCharacter[1][1];

    // Cambiando character type [3][1]
    // Cambiando character location [2][1]
    // Cambiando el character info [5][1]

    //Setteando nuevas imagenes // // [10][1]
    
    let imageProfile = document.getElementById('profile.picture');
    let imageNav = document.getElementById('nav-image_content');

    imageProfile.src= nameCharacter[10][1];
    imageNav.src= nameCharacter[10][1];

}

get()