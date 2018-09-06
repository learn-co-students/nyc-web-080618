class CreateFarmers < ActiveRecord::Migration
  def change
    create_table(:farmers) do |t|
      t.string :name
      t.integer :age
    end
  end
end
