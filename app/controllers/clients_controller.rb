class ClientsController < ApplicationController

  def index
    if session[:admin] == true
      @clients = Client.all
      respond_to do |f|
        f.json {render json: @clients}
      end
    else
      redirect_to root_path
    end
  end

end
