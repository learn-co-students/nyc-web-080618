# Associations in Rails

---

## Building a `has_many` and `belongs_to` Association in Rails

For our app, we're creating users and posts. A user `has_many` posts, and a post `belongs_to` a user.

- `rails new bloggr`

- `rails g resource User name`––this will create a User model, UsersController, and create a migration to create our users table. Remember that we do not need to say `name:string`. The rails generator will default to use a string:

```ruby
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name

      t.timestamps
    end
  end
end
```

- We need to tell our User that is `has_many` posts:

```ruby
class User < ApplicationRecord
  has_many :posts
end
```

- Let's generate a Post and tell it that it `belongs_to` a User: `rails g resource Post title content:text user:references`

  - the `user:references` generator does a few things for us:

    - adds the `belongs_to` to our Post model:

    ```ruby
    class Post < ApplicationRecord
      belongs_to :user
    end
    ```

  - adds a reference––foreign_key––to our posts table:

```ruby
class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
```
  - And [indexes](https://stackoverflow.com/questions/2955459/what-is-an-index-in-sql) the `user_id` on the posts table:

  ```ruby
  ActiveRecord::Schema.define(version: 2018_09_05_180025) do

    create_table "posts", force: :cascade do |t|
      t.string "title"
      t.text "content"
      t.integer "user_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index ["user_id"], name: "index_posts_on_user_id"
    end

    create_table "users", force: :cascade do |t|
      t.string "name"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

  end

  ```
---

# Testing our Associations

- `rails db:migrate && rails console`

- From the console we can try to create a new post:

```ruby
# in rails console
> my_post = Post.new(title: 'I love 2 blog', content: 'wow blogging is so fun!!')

> my_post.save
  (0.1ms)  begin transaction
  (0.1ms)  rollback transaction
=> false

```

`rollback transaction`

- Because our post––my_post––`belongs_to` a user, rails will validate the presence of the `user_id` on the post. In other words, a post is _dependent upon_ a user to exist.

```ruby
# in rails console
steve = User.create(name: 'steve')
steve_post = Post.create(title: 'S T E V E ', content: 'writing', user: steve)
# steve_post = Post.create(title: 'S T E V E ', content: 'writing', user_id: steve.id)
# is also a valid way to create a post and associate it with a user
```

# SUCCESS

![](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif)

---

# Creating a New Post with our Form

### Seeding our DB

```ruby
# db/seeds.rb
User.create([{name: 'billybob'}, {name: 'jimmy carter'}, {name: 'angelina jolie'}, {name: 'jerry seinfeld'}])
```

### Creating the Controller and Form:

#### Controller Methods

#### New Post Form

```html
<!-- app/views/posts/_form.html.erb -->

<%= form_for(@post) do |f| %>

  <%= f.label :title %>
  <%= f.text_field :title %>

  <%= f.label :content %>
  <%= f.text_area :content %>

  <%= f.label :user %>
  <%= f.collection_select(:user_id, User.all, :id, :name) %>

  <%= f.submit %>
<% end %>

```

---

#### A Quick Note on Collection Select:

[Collection select](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select) is looking for the following in order:

1.  the method we want to call on `@post:` user_id
2.  the collection we want to use to populate our dropdown with: `User.all`
3.  the value method; what will show up in our params and as a value in our `<option>` tags: `user_instance.id`
4.  the text method; what will show up inside the option tag, what will the user see? `user_instance.name`

- If we were to build our own `f.collection_select`, it might look something like this:
```html
<select name="post[user_id]">
  <% User.all.each do |user| %>
    <option value="<%= user.id %>">
      <%= user.name %>
    </option>
  <% end %>
</select>
```

---

#### Create our Posts Controller

```ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit]
  def show
    # @post = Post.find(params[:id]) #-> must be instance var to pass down to view
    render :show
  end

  def new #-> renders a form to create a new POST
    @post = Post.new #-> pass blank post instance to form_for
    render :new
  end

  def create #-> handle form submission when user tries to create a new post
    @post = Post.create(post_params)
    if @post.valid?
      redirect_to post_path(@post) # /posts/1 NEW GET request
    else
      render :new
    end
  end

  def edit #-> render a form to EDIT and EXISTING Post; GET /posts/:id/edit
    # @post = Post.find(params[:id]) #-> must be instance var to pass down to form
    render :edit
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :user_id)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end

```

---

#### Quick Note about Render vs Redirect:

- redirect is a **GET request**, that calls the posts#new method. This method resets the `@post` instance var
- `redirect_to new_post_path`
- this will render our `:new` form without a page reload. This allows us to keep the state of our form; `@post` does not change

---

#### Adding Some Validations:

```ruby
# app/models/post.rb
class Post < ApplicationRecord
  # ActiveRecord belongs_to provides a default validation for the presence and validity of a user_id;
  #we can make this optional by saying optional: true
  belongs_to :user # ->, optional: true
  # provides methods such as Post#user
  validates :title, :content, presence: true
end

```

#### Displaying errors to our user:

```html
<!-- app/views/posts/_form.html.erb -->
<% if @post.errors.any? %>
  <ol>
    <% @post.errors.full_messages.each do |msg| %>
      <li><%= msg %></li>
    <% end %>
</ol>
<% end %>
```

---

![](https://media.giphy.com/media/6vj5quVNRhoQw/giphy.gif)


### External Resources:
- [Indexing in SQL](https://stackoverflow.com/questions/2955459/what-is-an-index-in-sql)
- [Collection Select in Rails](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select)
- [Displaying ActiveRecord Validation Errors in Views](https://guides.rubyonrails.org/active_record_validations.html#displaying-validation-errors-in-views)
