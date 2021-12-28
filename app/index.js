/* Importar API */
// class API {
//     async getCharacterById(id) {
//         const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
//         const data = await response.json()
//         const newData = ((data) => {
//             const dataArray = Object.entries(newData)
//             const dataCharacter = {
//                 name : dataArray[1] ,
//                 status : dataArray[2] ,
//                 species : dataArray[3] ,
//                 type : dataArray[4] ,
//                 image : dataArray[8] ,
//                 gender : dataArray[5] ,
//             }
//             return console.log(dataCharacter);        
//         })
//     }   
// }
class API {
    getCharacterById(id) {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => {
                const newData = data
                const dataArray = Object.entries(newData)
                const dataCharacter = {
                    name : dataArray[1] ,
                    status : dataArray[2] ,
                    species : dataArray[3] ,
                    type : dataArray[4] ,
                    image : dataArray[8] ,
                    gender : dataArray[5] ,
                }
                return dataCharacter        
            })
    }   
}

const dataApi = new API()
console.log(dataApi.getCharacterById(1))
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
    // const a = new API();
    // async function setterCharacters() {
    //     const setterCharacter = await getCharacter(parseInt(pickRandom(0, 827)));
    //     const setterArrayCharacter = await gettinArray();
    // }
    // return setterCharacters(); 
})

/* Setter of the new character */
