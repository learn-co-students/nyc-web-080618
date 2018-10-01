class CreateHotdogs < ActiveRecord::Migration[5.2]
  def change
    create_table :hotdogs do |t|
      t.string :name
      t.string :ingredients

      t.timestamps
    end
  end
end
