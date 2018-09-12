# Rails Nested Forms Bakery/Bagel

From the [documentation](https://guides.rubyonrails.org/v5.0/form_helpers.html#nested-forms):

### Configuring our Model

```ruby
# models
class Bagel < ApplicationRecord
  belongs_to :bakery
end

class Bakery < ApplicationRecord
  has_many :bagels
  accepts_nested_attributes_for :bagels
end

```

### Building the Form:

```html
<h1>Create a new Bakery</h1>


<%= form_for @bakery do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <br>
  Bagels:
  <ul>
    <%= f.fields_for :bagels do |bagels_form| %>
      <li>
        <%= bagels_form.label :name %>
        <%= bagels_form.text_field :name %>

        <%= bagels_form.label :ingredients %>
        <%= bagels_form.text_field :ingredients %>
        ...
      </li>
    <% end %>
  </ul>

  <%= f.submit %>
<% end %>

```

### Building our Controller

```ruby
class BakeriesController < ApplicationController
  def new
    @bakery = Bakery.new
    @bakery.bagels.build
    render :new
  end

  def create
    Bakery.create(bakery_params)

    redirect_to #somewhere
  end

  private

  def bakery_params
    params.require(:bakery).permit(:name, bagels_attributes: [:name, :ingredients])
  end
end

```

### [Nested Resources](https://guides.rubyonrails.org/routing.html#nested-resources)

```ruby
Rails.application.routes.draw do
  resources :bakeries do
    resources :bagels
  end
end

```
Which gives us things like GET `/bakeries/1/bagels/new`


### External resources
- [Nested Forms](https://guides.rubyonrails.org/v5.0/form_helpers.html#nested-forms)
- [Nested Resources](https://guides.rubyonrails.org/routing.html#nested-resources)
