Rails.application.routes.draw do
  resources :users
  resources :dogs
  resources :cats
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/cat', to: 'cats#random_cat'
  get '/dog', to: 'dogs#random_dog'
end
