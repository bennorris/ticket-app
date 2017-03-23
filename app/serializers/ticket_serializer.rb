class TicketSerializer < ActiveModel::Serializer
  attributes :id, :date, :work_type, :start_time, :total_time, :status, :work, :client_id, :employee_id
  belongs_to :client
  belongs_to :employee
end
