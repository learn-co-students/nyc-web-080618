document.addEventListener("DOMContentLoaded", () => {
  // log all pokemon data
  console.log(POKEMON)
  console.log('%c FIRST POKEMON: ', 'color: purple', POKEMON[0])

// find HTML elements we care about
  const pokemonContainerToAppend = document.querySelector('#pokemon-container')
  const pokemonSearchInputField = document.querySelector('#pokemon-search-input')

  // POKEMON.forEach((pokemonJSONObject) => {
  //   const pTagForPokemon = document.createElement('p')
  //   pTagForPokemon.innerText = pokemonJSONObject.name
  //   pokemonContainerToAppend.appendChild(pTagForPokemon)
  // })
// render all pokemon to the page when our app first mounts
  const pokemonHTMLString = POKEMON.map((pokemonJSONObject) => `<p>${pokemonJSONObject.name}</p>`)
  pokemonContainerToAppend.innerHTML = pokemonHTMLString.join('')

  pokemonSearchInputField.addEventListener('input', (event) => {
    const filteredPokemonBasedOnSearchTerm = POKEMON.filter((pokemonJSONObject) => {
      // does the current pokemon in our itereration have a name that INCLUDES whatever the user typed
      return pokemonJSONObject.name.includes(event.target.value)
    })
    const filteredPokemonHTMLString = filteredPokemonBasedOnSearchTerm.map((pokemonJSONObject) =>
     `<p>${pokemonJSONObject.name}</p>`)

    pokemonContainerToAppend.innerHTML = filteredPokemonHTMLString.join('')
  })
})
