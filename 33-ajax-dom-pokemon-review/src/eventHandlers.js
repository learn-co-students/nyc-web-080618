const addNewPokemonHandler = /*FUNCTION*/ (event, pokemonContainerToAppendPokemonCards) => {
 event.preventDefault() //stop our form from sending an HTTP POST request
 // i need the new pokemon name the user input into the field
 // const newPokemonInputFieldValue = document.getElementById('name-input').value
 // const newPokemonSpriteFieldValue = document.getElementById('sprite-input').value
 const newPokemonInputFieldValue = event.target.querySelector('#name-input').value
 // i need the sprite the user input
 const newPokemonSpriteFieldValue = event.target.querySelector('#sprite-input').value
 // i need to somehow POST that data to my server via HTTP

 fetch('http://localhost:3000/pokemon', {
   method: 'POST', //which HTTP verb am i using
   headers: {
     'Accept': 'application/json', //i am expecting JSON back
     'Content-Type': 'application/json' //i am sending you JSON
   },
   body: JSON.stringify({ //JSON object with data; in rails this will come through via params
     name: newPokemonInputFieldValue,
     sprites: {
       front: newPokemonSpriteFieldValue
     }
   })
 }).then(response => response.json())
   .then(jsonPoke => {
     // create a new JS object with the data sent from the server
     const newlyCreatedPokemon = new Pokemon(jsonPoke)
     // render that newly created pokemon
     pokemonContainerToAppendPokemonCards.innerHTML += newlyCreatedPokemon.render()
   })

   event.target.reset()
}
