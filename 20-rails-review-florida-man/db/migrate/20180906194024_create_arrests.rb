class CreateArrests < ActiveRecord::Migration[5.2]
  def change
    create_table :arrests do |t|
      t.integer :cop_id
      t.integer :lawbreaker_id
      t.string :crime
      t.timestamps
    end
  end
end
