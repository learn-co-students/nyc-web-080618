class Pokemon {
  constructor(pokeJSONObject) {
    // `this` in the constructor will be the newly created pokemon object
    this.name = pokeJSONObject.name
    this.id = pokeJSONObject.id
    this.sprites = pokeJSONObject.sprites
  }

  render() {
    // this inside a method called on an object: pikachur.render()
    // `this` will be pikachu
    return (
      `<div class="pokemon-container" id="poke-${this.id}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${this.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img class="toggle-sprite" id="${this.name}" src="${this.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
    )
  }
}
