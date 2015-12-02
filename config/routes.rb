Rails.application.routes.draw do
  root to: 'ideas#index'

  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :ideas
    end
  end
end
