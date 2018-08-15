class CreateTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table(:trainers) do |table|
      table.string :name
    end
  end
end
