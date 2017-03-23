class EmployeesController < ApplicationController

def index
  if session[:admin] == true
    @employees = Employee.all
    respond_to do |f|
      f.json {render json: @employees}
    end
  else
    redirect_to root_path
  end
end

end
