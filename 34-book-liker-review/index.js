// Be able to click on a book, you should see the book’s thumbnail and description and a list of users who have liked the book.

document.addEventListener("DOMContentLoaded", function() {
  let jsBookDataStore = []

  const ulForListingBooks = document.getElementById('list')
  const showPanelForBookDetail = document.getElementById('show-panel')

  ulForListingBooks.addEventListener('click', (event) => {
    const bookId = event.target.dataset.bookid
    const targetBook = jsBookDataStore.find(book => book.id == bookId)
    // const targetBook = jsBookDataStore.find(book => book.id === parseInt(bookId))
    // const bookId = event.target.id
    const bookLikerNamesHTML = targetBook.users.map(user => `<p>${user.username}</p>`).join('')

    showPanelForBookDetail.innerHTML = (`
      <div>
        <h3>${targetBook.title}</h3>
        <img src="${targetBook.img_url}" >
        <p>${targetBook.description}</p>
        ${bookLikerNamesHTML}
        <button>Read Book</button>
      </div>
      `)
  })

  fetch('http://localhost:3000/books')
    // .then(function(response) {
    //   return response.json()
    // })
    // .then(function(books) {
    //   console.log(books)
    // })
    .then(response => response.json())
    .then(bookData => {
      jsBookDataStore= bookData
      ulForListingBooks.innerHTML = generateHTMLForBookList(bookData)
    })
    // we could make a class
    // we could document.createElement and append those
})

function generateHTMLForBookList(bookData) {
  return bookData.map(book => `<li data-bookId="${book.id}" id="${book.id}">${book.title}</li>`).join('')
}
