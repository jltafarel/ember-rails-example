Rails.application.routes.draw do
  
  scope '/api' do
    resources :users
  end

  mount_ember_app :frontend, to: "/"
end
