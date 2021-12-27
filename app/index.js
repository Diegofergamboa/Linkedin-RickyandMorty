/* Importar API */
class API {
    async getCharacterById(id) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        return data
    }
}
const dataApi = new API()

/* Performance */

function changeId(value) {
    const randomCharacter = dataApi.getCharacterById(value);
    return randomCharacter;
}

function pickRandom(min, max) {
        return (Math.random() * (max - min) + min);
}

const newCharacterValue = changeId(parseInt(pickRandom(0, 827)));

/* To save the performance work */ 

// document.addEventListener("DOMContentLoaded" ,() => {
//     loadNewCharacter();
// })

function loadNewCharacter() {
    let button = document.getElementById('btn-refresh');
    button.onclick = alert('Sirve el botón de refresh');

    
    // const newCharacterSon = newCharacterValue;
    // setImages(newCharacterSon);
}

function setImages (newCharacterImage) {
    const imageNav = document.getElementById("nav-image_content");
    const imageProfile = document.getElementById("profile-photo");
    
    const imageNavSrc = imageNav.src;
    const imageProfileSrc = imageProfile.src;

    imageProfileSrc =  newCharacterImage.src
    imageNavSrc = newCharacterImage.src
}