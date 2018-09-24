# AJAX and the DOM AKA Pokemon Review

The last time we saw this lab, we were **not interacting with our database at all**. No changes were persisted and we were hard-coding the `POKEMON` data. This time around the Pokemon data lives in a file called `db.json` and we'll be creating a fake server for our CRUD actions.

- From your terminal, call `npm install -g json-server`. We'll be talking more about NPM in Mod4 (Node Package Manager), but we can think of this as being similar to Ruby's Bundler and gems. `json-server` is a JavaScript package that will fake a RESTful server for us.

- To boot the server, call `json-server --watch db.json`. If we navigate to http://localhost:3000/pokemons, we should see all of our JSON data. Our browser is sending an HTTP `GET` **request** and the server **responds** with some `JSON`.


---

## External Resources


<!-- markdown vars -->
[mdn-accept-header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
[mdn-content-type-header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
