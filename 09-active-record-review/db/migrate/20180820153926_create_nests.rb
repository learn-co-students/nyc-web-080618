class CreateNests < ActiveRecord::Migration[5.2]
  def change
    create_table :nests do |t|
      t.string :name
      t.integer :squirrel_id
      t.integer :tree_id
    end
  end
end
