# Private Keyword

[Read this (very short) article](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)

### Routes Reference:

```ruby
Rails.application.routes.draw do
  # tells my app what do do/how to respond to HTTP requests
  resources :books, only: [:index, :new, :create]

  # when I receive a GET request to /books
  # go TO the books controller, for a method called index
  # construct a helper method called books_path

# helper method is books_path
  # get '/books', to: 'books#index', as: 'books'
  # get '/books/new', to: 'books#new', as: 'new_book'
  # post '/books', to: 'books#create', as: 'books'
  # get '/books/:id', to: 'books#show', as: 'book'
end

# SINATRA
# get '/books' do
#   #controller code
# end
```

### Annotated BooksController

```ruby
class BooksController < ApplicationController

  # show ALL books
  def index
    @books = Book.all #ask Book model for data and pass @books instance var to the view
    render :index # look for folder called /books in the views folder, then render the index.html.erb
  end

  # show form to create a new book
  def new
    @book = Book.new # create a blank instance to pass to form_for
    render :new # render app/views/books/new.html.erb
  end

# POST request from our new book form
# create is called when our app receives a POST request to /books
  def create
    @book = Book.create(book_params) # pass in return value of private book_params method, which is a hash of whitelisted attributes

    if @book.valid? # checking validations; method is provided by ActiveRecord
      redirect_to(books_path) # redirect fires new GET request, which will hit the booksController#index
    else # if book is not valid
      # because I am not redirecting, instance var @book maintains the attributes from the form
      render(:new) # render DOES NOT TRIGGER NEW GET REQUEST
    end
  end

#everything below private keyword is private to BooksController
private
  def book_params
    # return a hash of whitelisted attributes from params
    # params -> { book: { title: 'harry potter', snippet: 'ur a wizard, harry', num_pages: 500 } }
    params.require(:book).permit(:title, :snippet, :num_pages)
  end

end
```

### Why Use Strong Params?

- From the docs (linked below):

```
With strong parameters, Action Controller parameters are forbidden to be used in Active Model mass assignments until they have been whitelisted.
This means that you'll have to make a conscious decision about which attributes to allow for mass update.
This is a better security practice to help prevent accidentally allowing users to update sensitive model attributes.
```

### Validations

- Why use validations?

- This is your typical user:
  ![Your users on your site](https://camo.githubusercontent.com/bd5a0e0355fa6a8c1f5478f197be5562a479d41a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5a665531314f44616e6c6f43412f67697068792e676966)

- We want to protect against unwanted, unexpected data. We should be programming defensively
- For example, would it make sense for our app to allow a book with an empty title to be created?

- ActiveRecord provides us _several_ built in validations and I **highly recommend reading the docs** (linked below)
- If we need custom functionality, we can also write our own methods
- These validations will be run **any time i try to write to the database** -> `Book.create`, `Book.update`, `Book#save`

```ruby
class Book < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  # validates(:title, { presence: true })
  validate :min_num_pages # validate is for custom validation methods
  # validate(:min_num_pages)

  def min_num_pages
    # self -> book instance we are attempting to validate
    if self.num_pages < 5
      self.errors.add(:num_pages, 'Must be greater than 5!!! This is not a pamphlet!')
    end
  end
end
```

---

### External Resources:

- [Private keyword in Ruby](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)
- [Active Record Validations Docs](http://guides.rubyonrails.org/active_record_validations.html)
- [Displaying Validations in Views Rails Docs](http://guides.rubyonrails.org/active_record_validations.html#displaying-validation-errors-in-views)
- [Form For](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
- [Rails Strong Params](https://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters)
