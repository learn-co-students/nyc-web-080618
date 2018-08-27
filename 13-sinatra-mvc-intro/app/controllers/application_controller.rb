require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

# HTTP VERB, endpoint
# view ALL books
  get "/books" do
    # ask the model for all books found in db
    @books = Book.all
    # embedded ruby
    erb(:index)
  end

  # view one book
  get "/books/:id" do
    # user wants to see a SPECIFIC BOOK
    # ask model for that book
    @book = Book.find(params[:id])
    erb(:show)
  end

end
