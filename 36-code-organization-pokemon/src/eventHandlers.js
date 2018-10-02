function handleSpriteToggle(event) { //use event delegation to determine of img was clicked
  if (event.target.dataset.action === 'flip') {
    const targetPoke = Pokemon.findById(event.target.dataset.id)
    // event.target is an img tag
    // img tags have an src attribute
    event.target.src = targetPoke.toggleSprite(event.target.src)
  }
}

function handlePokeSearch(event, pokeContainerDiv) {
  const filteredPokemon = Pokemon.filter(event.target.value)
  const filteredPokeHTML = Pokemon.renderAll(filteredPokemon)

  // if (filteredPokeHTML.length === 0) {
  //   document.getElementById('pokemon-container').innerHTML = `<p><center>There are no Pokémon here</center></p>`
  // } else {
  //   document.getElementById('pokemon-container').innerHTML = filteredPokeHTML
  // }

  pokeContainerDiv.innerHTML = filteredPokeHTML.length ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
}
