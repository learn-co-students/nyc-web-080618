const Book = (() => {
  const allBooks = []

  return class {
    static findById(bookId) {
      return allBooks.find(book => book.id == bookId)
    }

    constructor(bookData) {
      this.id = bookData.id
      this.title = bookData.title
      this.description = bookData.description
      this.img_url = bookData.img_url
      this.users = bookData.users
      allBooks.push(this) //add newly created book to the allBooks array
    }
    // constructor({ id, title, description, img_url, users }) {// use obj destructuring
    //   this.id = id
    //   this.title = title
    //   this.description = description
    //   this.img_url = img_url
    //   this.users = users
    //   allBooks.push(this) //add newly created book to the allBooks array
    // }

    updateBook(newBookDetails) {
      this.title = newBookDetails.title
      this.description = newBookDetails.description
      this.img_url = newBookDetails.img_url
      this.users = newBookDetails.users
    }

    render() { //this will be the book instance we called the method on
      return `<li data-bookId="${this.id}" id="${this.id}">${this.title}</li>`
    }

    renderBookDetail() {
      // we could move the user map fn to its own var
      return (`
        <div>
          <h3>${this.title}</h3>
          <img src="${this.img_url}" >
          <p>${this.description}</p>
          ${this.users.map(user => `<p>${user.username}</p>`).join('')}
          <button name="like" data-id="${this.id}" id="like-book-${this.id}">Read Book</button>
        </div>
      `)
    }
  }
})() //IIFE
