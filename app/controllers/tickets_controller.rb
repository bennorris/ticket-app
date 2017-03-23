class TicketsController < ApplicationController

  def new
  end

  def create
    @ticket = Ticket.new(ticket_params)

    year = params[:ticket]['date(1i)'].to_i
    month = params[:ticket]['date(2i)'].to_i
    day = params[:ticket]['date(3i)'].to_i
    date_formatted = Date.new(year,month,day)
    @ticket.date = date_formatted

    if @ticket.save
      redirect_to ticket_created_path
    else
      redirect_to root_path
    end
  end

  def accepted
  end

  def all
    if session[:admin] != true
      redirect_to root_path
    else
      @tickets = Ticket.all
      respond_to do |f|
        f.html {render :all}
        f.json {render json: @tickets}
      end
    end
  end



private

def ticket_params
    params.require(:ticket).permit(:time, :date, :work_type, :start_time, :total_time, :status, :work, :notes, :client_id, :employee_id)
end

end
