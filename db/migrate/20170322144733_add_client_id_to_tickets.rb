class AddClientIdToTickets < ActiveRecord::Migration[5.0]
  def change
    add_column :tickets, :client_id, :integer
    remove_column :tickets, :client, :string
  end
end
