class CreateLawbreakers < ActiveRecord::Migration[5.2]
  def change
    create_table :lawbreakers do |t|
      t.string :name
      t.integer :teeth
      t.timestamps
    end
  end
end
