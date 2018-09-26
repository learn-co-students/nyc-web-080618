document.addEventListener("DOMContentLoaded", () => {

  const ulForListingBooks = document.getElementById('list')
  const showPanelForBookDetail = document.getElementById('show-panel')

  ulForListingBooks.addEventListener('click', (event) => {
    const bookId = event.target.dataset.bookid
    const targetBook = Book.findById(bookId)
    showPanelForBookDetail.innerHTML = targetBook.renderBookDetail()
  })

  showPanelForBookDetail.addEventListener('click', (event) => {
    // if (event.target.tagName === 'BUTTON')
    if (event.target.name === 'like') {
      // we need to find the book that was clicked
      const bookId = event.target.dataset.id
      const targetBook = Book.findById(bookId)

  // pessimistic rendering
      fetch(`http://localhost:3000/books/${targetBook.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json', //client will accept JSON
          'Content-Type': 'application/json' //i am sending u a content type of JSON
        },
        body: JSON.stringify({
          // create a copy of the targetBook.users array and ADD this new object to it
          users: [...targetBook.users, { id: 1, username: "pouros" }]
        })
      })
      .then(response => response.json())
      .then(updatedBook => {
        targetBook.updateBook(updatedBook)
        showPanelForBookDetail.innerHTML = targetBook.renderBookDetail()
      })
      .catch(error => console.error('here is your error ', error))
    }
  })

  fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(bookData => {
      bookData.forEach(bookObj => {
      const newBook = new Book(bookObj)
      ulForListingBooks.innerHTML += newBook.render()
      }) //create new book objs using data from API
    })
})
