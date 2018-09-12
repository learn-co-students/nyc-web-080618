class CreateBagels < ActiveRecord::Migration[5.2]
  def change
    create_table :bagels do |t|
      t.string :name
      t.string :type
      t.string :ingredients
      t.references :bakery, foreign_key: true

      t.timestamps
    end
  end
end
