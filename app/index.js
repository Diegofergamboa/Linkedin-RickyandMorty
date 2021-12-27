/* Importar API */
class API {
    async getCharacterById(id) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        const newData = response.console.log(data)

        
    //     data = JSON.parse(data);
    //     const dataArray = []
    //     for (let i ; i < data.length + 1 ; i++) {
    //         data.push(data[i]);
    //         console.log(data);
    //     }
    //     return dataArray
    }
}

const dataApi = new API()

/* Performance of the random Character */

function changeId(value) {
    const randomCharacter = dataApi.getCharacterById(value);
    return randomCharacter;
}

function pickRandom(min, max) {
        return (Math.random() * (max - min) + min);
}

const newCharacter = changeId(parseInt(pickRandom(0, 827)));

/* Calling the new Character with the button refresh */ 

document.addEventListener("DOMContentLoaded" , () => {
    let btn = document.getElementById("btn-refresh");
    btn.onclick = () => {
        console.log(newCharacter);
    } 
})

/* Setter of the new character */
