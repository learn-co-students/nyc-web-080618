const DOG_URL = "http://localhost:4000/dog";
const CAT_URL = "http://localhost:4000/cat";

export default class AnimalAdapter {
  static getDog() {
    return fetch(`${DOG_URL}`)
      .then(res => res.json())
      .then(json => json.url)
  }

  static getCat() {
    return fetch(`${CAT_URL}`)
      .then(res => res.json())
      .then(json => json.url)
  }
}
