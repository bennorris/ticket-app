class SessionsController < ApplicationController

  def create
    if params[:session][:username] == "test" && params[:session][:password] == "test"
      session[:admin] = true;
      redirect_to add_ticket_path
    else
      redirect_to root_path
    end
  end

end
