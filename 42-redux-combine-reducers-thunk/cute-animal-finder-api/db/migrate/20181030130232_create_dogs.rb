class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :url
      t.integer :age
      
      t.timestamps
    end
  end
end
