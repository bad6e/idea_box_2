Rails.application.routes.draw do
  root to: 'ideas#index'

  resources :ideas, only: [:index]

  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :ideas, only: [:index, :show]
    end
  end
end
