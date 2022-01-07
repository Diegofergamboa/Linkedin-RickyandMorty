
async function getCharacter (id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}
    `)
    const json = await response.json()
    const data = Object.entries(json);
    return data
}

async function buildCharacter() {

    for (let i = 1 ; i <= 10 ; i ++ ) {
        const getting = await getCharacter(randomBy());
        const character = getting;
        let htmlCharacter = `
            <div>
                <img class = "imageCharacter" src="${character[8][1]}">
            </div>
            <div>
            <h2>${character[1][1]}</h2>
            <p>Type : ${character[3][1]}</p>
            <p>Status : ${character[2][1]}</p>
            <p>Gender : ${character[5][1]}</p>
            </div>
        `
        document.getElementsByClassName(`character${i}`)[0].innerHTML = htmlCharacter;    
    }


    
    
    
    
    // characterAssign();
    
    function characterAssign() {
        document.getElementsByClassName("character1")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character2")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character3")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character4")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character5")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character6")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character7")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character8")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character9")[0].innerHTML = htmlCharacter;
        document.getElementsByClassName("character10")[0].innerHTML = htmlCharacter;
    }
}


function pickRandom(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}
function randomBy () {
    return parseInt(pickRandom(0, 826));
}


async function get () {
    const dataCharacter = await getCharacter(randomBy()); // [1][1]
    // console.log('Estamos en el personaje ' + random1);

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


document.addEventListener("DOMContentLoaded", get(), buildCharacter());


/*
    CARD DEL CHARACTER
    <div>
        <img>
    </div>
    <div>
    <h2>Nombre del personaje aleatorio</h2>
    <p>Type : </p>
    <p>Status : </p>
    <p>Gender : </p>
    </div>
*/
