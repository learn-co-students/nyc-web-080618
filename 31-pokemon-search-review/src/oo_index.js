document.addEventListener('DOMContentLoaded', () => {
  //when app first loads and DOM is parsed
  // find HTML elements we care about
  const pokemonContainerToAppend = document.querySelector('#pokemon-container')
  const pokemonSearchInputField = document.querySelector('#pokemon-search-input')
  // create new "instances" (js objects) representing each pokemon
  POKEMON.forEach((pokemonJSONObject) => new Pokemon(pokemonJSONObject))
  // initially render all pokemon when app mounts
  const allPokemonHTMLString = Pokemon.all.map((pokeObject) => {
    return pokeObject.render()
  }).join('')

  pokemonContainerToAppend.innerHTML = allPokemonHTMLString
  // we could also use a `static` method on the Pokemon class to produce ALL the poke HTML

  pokemonSearchInputField.addEventListener('input', (event) => {
    const filteredPokemonBasedOnSearchTerm = Pokemon.all.filter((pokeObject) => {
      return pokeObject.name.includes(event.target.value.toLowerCase())
    })

    const filteredPokemonHTMLString = filteredPokemonBasedOnSearchTerm.map((pokeObject) => {
      return pokeObject.render()
    }).join('')

    pokemonContainerToAppend.innerHTML = filteredPokemonHTMLString
  })

  pokemonContainerToAppend.addEventListener('click', (event) => {
    if (event.target.className === 'toggle-sprite') {
      const nameOfPokeThatWasClicked = event.target.id
      const pokeThatNeedsToToggle = Pokemon.all.find((pokeObject) => {
        return pokeObject.name === nameOfPokeThatWasClicked
      })

      event.target.src = pokeThatNeedsToToggle.toggleImgSrc()
    }
  })
})
