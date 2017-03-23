class WelcomePageController < ApplicationController

  def welcome
    if session[:admin] != true
    @session = Session.new
    else
      redirect_to add_ticket_path
    end
  end

  def login
  end

  def add_ticket
    if session[:admin] != true
      redirect_to root_path
    else
      @ticket = Ticket.new
    end
  end

end
