class ChangeColumnNameinTickets < ActiveRecord::Migration[5.0]
  def change
    rename_column :tickets, :type, :work_type
  end
end
