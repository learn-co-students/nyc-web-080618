Rails.application.routes.draw do
  resources :bakeries do
    resources :bagels
  end
end
