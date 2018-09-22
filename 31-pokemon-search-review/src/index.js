// render functions//////////////////////////////////////////////////
// POKEMON.forEach((pokemonJSONObject) => {
//   const pTagForPokemon = document.createElement('p')
//   pTagForPokemon.innerText = pokemonJSONObject.name
//   pokemonContainerToAppend.appendChild(pTagForPokemon)
// })
// render all pokemon to the page when our app first mounts
const renderAllPokemon = /*FUNCTION*/(pokemonList) => {
  return pokemonList.map((pokemonJSONObject) => /*RETURN*/ (
      `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemonJSONObject.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img src="${pokemonJSONObject.sprites.front}">
            </div>
          </div>
          <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemonJSONObject.name}" data-action="flip-image">
            flip card
          </p>
        </div>
      </div>`
    )
  )
}

// function renderAllPokemon(pokemonList) {
//   return pokemonList.map((pokemonJSONObject) => (
        // `<div class="pokemon-container">
        //   <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        //     <h1 class="center-text">${pokemonJSONObject.name}</h1>
        //     <div style="width:239px;margin:auto">
        //       <div style="width:96px;margin:auto">
        //         <img src="${pokemonJSONObject.sprites.front}">
        //       </div>
        //     </div>
        //     <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemonJSONObject.name}" data-action="flip-image">
        //       flip card
        //     </p>
        //   </div>
        // </div>`
//     )
//   )
// }

// wait for HTML to be parsed and rendered
document.addEventListener("DOMContentLoaded", () => {
  // log all pokemon data
  console.log(POKEMON)
  console.log('%c FIRST POKEMON: ', 'color: purple', POKEMON[0]) //log first pokemon object from JSON

// find HTML elements we care about
  const pokemonContainerToAppend = document.querySelector('#pokemon-container')
  const pokemonSearchInputField = document.querySelector('#pokemon-search-input')

  // when app first mounts, render all pokemon
  const initialRenderPokemonHTMLString = renderAllPokemon(POKEMON) //helper function that produces a string of HTML
  pokemonContainerToAppend.innerHTML = initialRenderPokemonHTMLString.join('') //set the InnerHTML of a div to the HTML string produced by our render function

  pokemonSearchInputField.addEventListener('input', (event) => { //listen for the user typing into the search field
    const filteredPokemonBasedOnSearchTerm = POKEMON.filter((pokemonJSONObject) => { //filter pokemon based on user search term
      // does the current pokemon in our itereration have a name that INCLUDES whatever the user typed
      return pokemonJSONObject.name.includes(event.target.value)
    })

    const filteredPokemonHTMLString = renderAllPokemon(filteredPokemonBasedOnSearchTerm) //use our helper method to render the pokemon again

    pokemonContainerToAppend.innerHTML = filteredPokemonHTMLString.join('')
  })
})
