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

const newCharacter = changeId(parseInt(pickRandom(0, 827)));

/* To save the performance work*/ 

document.addEventListener("DOMContentLoaded" , () => {
    setNewCharacter();
})

/* Setter of the new character */

