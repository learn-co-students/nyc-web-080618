document.addEventListener('DOMContentLoaded', /*function*/ () => {

  const adapter = new Adapter()

  adapter.fetchAllPokemon().then(pokeJSON => {
    pokeJSON.forEach((pokeData) => new Pokemon(pokeData))
      document.getElementById('pokemon-container').innerHTML = Pokemon.renderAll()
  })

  const pokeContainerDiv = document.getElementById('pokemon-container')

  document.getElementById('pokemon-container').addEventListener('click', handleSpriteToggle)

  // document.getElementById('pokemon-search-form').addEventListener('input', handlePokeSearch.bind(pokeContainerDiv))

  document.getElementById('pokemon-search-form').addEventListener('input', (event) => {
    handlePokeSearch(event, pokeContainerDiv)
  })
})
