Rails.application.routes.draw do
  
  resources :pets, only: [:index]
  resources :users

  post "/login", to: "sessions#create"

  get '/me', to: 'users#show'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
