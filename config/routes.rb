Rails.application.routes.draw do
  
  resources :pets, only: [:index, :show]
  resources :users
  resource :comments, only: [:create]

  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/authorize", to: "users#show"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
