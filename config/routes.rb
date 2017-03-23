Rails.application.routes.draw do
  resources :employees
  resources :clients
  get 'welcome_page/welcome'
  root'welcome_page#welcome'
  resources :sessions
  resources :tickets
  get 'add_ticket', to: 'welcome_page#add_ticket'
  get 'ticket_created', to: 'tickets#accepted'
  get 'all_tickets', to: 'tickets#all'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
