class CreateCows < ActiveRecord::Migration
  def change
    create_table :cows do |t|
      t.integer :farmer_id
      t.string :name
      t.integer :weight
    end
  end
end
