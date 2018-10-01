class CreateCatapults < ActiveRecord::Migration[5.2]
  def change
    create_table :catapults do |t|
      t.string :name
      t.integer :range

      t.timestamps
    end
  end
end
