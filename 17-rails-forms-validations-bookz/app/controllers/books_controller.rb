class BooksController < ApplicationController
  def index
    @books = Book.all # ask model for ALL books
    render :index
  end

  def new # show my user a form to create a new book (GET /books/new)
    @book = Book.new
    render :new
  end

  def create # handle the form submission (POST /books)
    @book = Book.create(book_params)
    if @book.valid?
      redirect_to books_path #-> '/books'
    else
      render :new
    end
  end

  private

  def book_params
    # params -> { book: { title: 'harry potter', snippet: 'ur a wizard, harry', num_pages: 500 } }
    params.require(:book).permit(:title, :snippet, :num_pages)
  end
end
