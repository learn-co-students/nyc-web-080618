class BooksController < ApplicationController

  # HTTP VERB, endpoint
  # view ALL books
    get "/books" do
      # ask the model for all books found in db
      @books = Book.all
      # embedded ruby
      erb :"books/index"
    end

    # render a form to create a new book
    get "/books/new" do
      erb :"books/new"
    end

    # handles the form submission from books/new.erb
    post "/books" do
      # Book.create(params) this will work for now, don't rely on it, be more specific with your params

      Book.create({ title: params[:title], snippet: params[:snippet] })

      # Book.create(params)
      # trigger a new GET request to /books
      redirect "/books"
    end

    # view one book
    get "/books/:id" do
      # params => { id: "2" }
      # user wants to see a SPECIFIC BOOK
      # ask model for that book
      @book = Book.find(params[:id])
      erb :"books/show"
    end

end
