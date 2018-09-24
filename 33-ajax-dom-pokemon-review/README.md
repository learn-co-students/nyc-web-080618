# AJAX and the DOM AKA Pokemon Review

The last time we saw this lab, we were **not interacting with our database at all**. No changes were persisted and we
were hard-coding the `POKEMON` data. This time around the Pokemon data lives in a file called `db.json` and we'll be
creating a fake server for our CRUD actions.

- From your terminal, call `npm install -g json-server`. We'll be talking more about NPM in Mod4 (Node Package Manager),
  but we can think of this as being similar to Ruby's Bundler and gems. `json-server` is a JavaScript package that will
  fake a RESTful server for us.

- To boot the server, call `json-server --watch db.json`. If we navigate to http://localhost:3000/pokemon, we should see
  all of our JSON data. Our browser is sending an HTTP `GET` **request** and the server **responds** with some `JSON`.

---

## Sending HTTP Requests to our Server with `fetch`

### Sending a `GET` Request

```javascript
fetch('http://localhost:3000/pokemon', {
  //HTTP GET request
  method: 'GET'
})
  .then(response => response.json())
  .then(pokeData => console.log(pokeData))
```

- The snippet above sends an HTTP `GET` request to our RESTful JSON Server. The server will send back all Pokemon data
  as [JSON][wiki-json]

- Note that `fetch` will default to sending a `GET` request unless we tell it otherwise

### Sending a `POST` Request

- If you've forgotten RESTful routes, refer back to [Restular.com][restular]

- `fetch` allows us to send `POST`, `PATCH/PUT`, and `DELETE` requests to our RESTful server. The `json-server` package
  we installed earlier provides full RESTful routes for our `Pokemon`.

- This means we can send a `POST` request to `localhost:3000/pokemon` and it will create a new Pokemon in our "database"
  (later we'll learn how to create our own RESTful server but you could imagine this request being processed by
  `PokemonController#create`)

- Let's write the code that will update the DOM with the new pokemon sent back from our server:

```javascript
formForCreatingNewPokemon.addEventListener('submit', (event, pokemonContainerToAppendPokemonCards) => {
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
    body: JSON.stringify({
      //JSON object with data; in rails this will come through via params
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

  event.target.reset() //clear the form
})

```

### Sending a Delete Request

- Remember the RESTful route for deleting a particular record from our database? `DELETE` `/pokemon/:id`

```javascript
// where pokeObj represents a particular pokemon object
fetch(`http://localhost:3000/pokemon/${pokeObj.id}`, { //could be coming from a button
  method: 'DELETE'
})
.then(r => r.json())
.then((data) => {
  // remove element from the DOM
  document.querySelector(`poke-${pokeObj.id}`).remove()
})
```

---

## External Resources

- [MDN DOC on `Accept` `fetch` header][mdn-accept-header]
- [MDN DOC on `Content-Type` `fetch` header][mdn-content-type-header]
- [JSON Wikipedia Article][wiki-json]
- [Restular.com][restular]

<!-- markdown vars -->

[mdn-accept-header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
[mdn-content-type-header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
[wiki-json]: https://en.wikipedia.org/wiki/JSON
[restular]: http://www.restular.com/
