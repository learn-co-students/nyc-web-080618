class Pokemon {
  static renderAll(pokeToDisplay=Pokemon.all) {
    // will produce an ARRAY of html strings, i need to join('') to make a big string instead of an array
    return pokeToDisplay.map((pokeInstance) => pokeInstance.render()).join('')
  }

  static filter(term) {
    return Pokemon.all.filter(pokeInstance => {
      return pokeInstance.name.includes(term.toLowerCase())
    })
  }

  static findById(pokeId) {
    return Pokemon.all.find(pokeInstance => pokeInstance.id == pokeId)
  }

  constructor(pokeDataFromApi) {
    this.id = pokeDataFromApi.id
    this.name = pokeDataFromApi.name
    this.sprites = pokeDataFromApi.sprites
    Pokemon.all.push(this)
  }

  toggleSprite(currentImg) {
    return currentImg === this.sprites.front ? this.sprites.back : this.sprites.front
  }

  render() { //should produce HTML string for ONE pokemon
    return (
      `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${this.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="${this.id}" data-action="flip" class="toggle-sprite" src="${this.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
    )
  }
}

Pokemon.all = []
