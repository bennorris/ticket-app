class RemoveColumnFromTicket < ActiveRecord::Migration[5.0]
  def change
    remove_column :tickets, :employee, :string
  end
end
