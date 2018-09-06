Rails.application.routes.draw do
  # get '/posts/new', to: 'posts#new', as: 'new_post'
  # post '/posts', to: 'posts#create', as: 'posts'
  # get '/posts/:id', to: 'posts#show', as: 'post'
  # get '/posts/:id/edit', to: 'posts#edit', as: 'edit_post'

  resources :posts, only: [:new, :create, :show, :edit]

  # resources :users
  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
