document.addEventListener('DOMContentLoaded', /*function*/ () => {
  const pokemonContainerToAppendPokemonCards = document.querySelector('#pokemon-container')
  const formForCreatingNewPokemon = document.querySelector('#new-pokemon-form')

  formForCreatingNewPokemon.addEventListener('submit', (event) => addNewPokemonHandler(event, pokemonContainerToAppendPokemonCards))

  fetch('http://localhost:3000/pokemon', {
    method: 'GET'
  }) //HTTP GET request
    .then(response => response.json())
    .then(pokeData => {
      const pokemonCardHTMLString = pokeData.map(/*FUNCTION*/(pokeJSONObject) => {
        const newPokemonObj = new Pokemon(pokeJSONObject)
        return newPokemonObj.render()
      })
      pokemonContainerToAppendPokemonCards.innerHTML = pokemonCardHTMLString.join('')
    })

    // fetch('http://localhost:3000/pokemon/2', { //could be coming from a button
    //   method: 'DELETE'
    // })
    // .then(r => r.json())
    // .then((data) => console.log(data)) //would need to find the pokemon card on the DOM and remove it
})
