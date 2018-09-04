class CreateDonuts < ActiveRecord::Migration[5.2]
  def change
    create_table :donuts do |t|
      t.string :name
      t.boolean :sprinkles
      t.string :filling
      t.boolean :tasty

      t.timestamps
    end
  end
end
