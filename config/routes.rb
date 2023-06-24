Rails.application.routes.draw do
  
  resources :pets, only: [:index]


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
