
async function getCharacter (id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}
    `)
    const json = await response.json()
    const data = Object.entries(json);
    return data
}

async function get () {
    const nameCharacter = await getCharacter(1); // [1][1]
    console.log(nameCharacter);
    // Cambiando el nombre
    // let nameDom = document.getElementById('character-name');
    // nameDom.innerHTML = nameCharacter[1][1];

    // Cambiar character type
    // Cambiar character location
    // Cambiando el character info


}

get()