/* Importar API */
class API {
    async getCharacterById(id) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        // const dataEntries = await data.entries()
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
    const newCharacterSon = newCharacterValue;
    console.log(newCharacterSon);
}

function setImages (newCharacterImage) {
    const imageNav = document.getElementById("nav-image_content")[0];
    const imageProfile = document.getElementById("profile-photo")[0];
    
    const imageNavSrc = imageNav.src;
    const imageProfileSrc = imageProfile.src;

    imageProfileSrc =  newCharacterImage.src
    imageNavSrc = newCharacterImage.src
}