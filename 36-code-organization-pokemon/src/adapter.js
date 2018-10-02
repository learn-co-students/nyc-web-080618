class Adapter {
  constructor(endpoint='http://localhost:3000') {
    this.endpoint = endpoint
  }

  fetchAllPokemon() {
    return fetch(`${this.endpoint}/pokemon`).then(r => r.json())
  }
}
