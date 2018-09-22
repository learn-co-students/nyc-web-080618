class Pokemon {
  constructor(pokemonJSONObject) {
    // `this` inside of a constuctor will be the newly created obj: { name: 'pikachu' }
    this.name = pokemonJSONObject.name
    this.order = pokemonJSONObject.order
    this.sprites = pokemonJSONObject.sprites
    this.showBackSprite = false
    Pokemon.all.push(this) //add each newly created pokemon to our running list of all
    // @@all << self for the Rubyists
  }

  toggleImgSrc() { //`this` in a method called within a context is the object
    // object.method; `this` will be the object
    if (this.showBackSprite) {
      this.showBackSprite = false
      return this.sprites.front
    } else {
      this.showBackSprite = true
      return this.sprites.back
    }
  }

  render() { //render ONE particular pokemon
    // pikachu.render()
    // when a function is called within a context (object.method)
    // `this` keyword will be that object
    return (
      `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${this.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img class="toggle-sprite" id="${this.name}" src="${this.sprites.front}">
            </div>
          </div>
          <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">
            flip card
          </p>
        </div>
      </div>`
    )
  }
}

Pokemon.all = []
