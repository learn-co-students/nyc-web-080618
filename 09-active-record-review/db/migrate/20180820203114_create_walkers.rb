class CreateWalkers < ActiveRecord::Migration[5.2]
  def change
    create_table :walkers do |t|
      t.string :name
      t.integer :rating
    end
  end
end
