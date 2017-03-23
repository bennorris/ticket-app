class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.string :client
      t.string :employee
      t.integer :time
      t.string :date
      t.string :type
      t.integer :start_time
      t.integer :total_time
      t.string :status
      t.string :work
      t.string :notes
      t.timestamps
    end
  end
end
