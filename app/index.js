/* Importar API */
class API {
    async getCharacterById(id) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        const newData = await data;
        const 
    }
    async gettinArray(newData) {
            const dataArray = Object.entries(newData)
            const dataCharacter = {
                name : dataArray[1] ,
                status : dataArray[2] ,
                species : dataArray[3] ,
                type : dataArray[4] ,
                image : dataArray[8] ,
                gender : dataArray[5] ,
            }
            return dataCharacter;        
        }
}

const construction = ((a) => {
    console.log('hello' + a)
})

const dataApi = new API()

/* Performance of the random Character */

// function changeId(value) {
//     const randomCharacter = dataApi.getCharacterById(value);
//     return randomCharacter;
// }

function pickRandom(min, max) {
        return (Math.random() * (max - min) + min);
}

// const newCharacter = changeId(parseInt(pickRandom(0, 827)));

/* Calling the new Character with the button refresh */ 

document.addEventListener("DOMContentLoaded" , () => {
    let btn = document.getElementById("btn-refresh");
    btn.onclick = () => {
        const setttt = (dataApi.getCharacterById(parseInt(pickRandom(0, 827))));
        console.log(setttt);
    }    
})

/* Setter of the new character */
