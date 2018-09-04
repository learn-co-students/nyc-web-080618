Rails.application.routes.draw do
  # when I receive a GET request to /donuts/new, CALL DonutsController#new. ALSO, create a helper method called new_donut_path
  get '/donuts/:id', to: 'donuts#show', as: 'donut'
  delete '/donuts/:id', to: 'donuts#destroy', as: 'destroy_donut'
  get '/donuts/new', to: 'donuts#new', as: 'new_donut'
  get '/profile', to: 'donuts#profile'
  # get('/donuts/new', { to: 'donuts#new', as: 'new_donut' })

  # resources(:donuts, { only: [:show, :new, :destroy] }) SAME AS THE ABOVE IF WE HATE TYPING ROUTES OUT IN LONGER SYNTAX
end
