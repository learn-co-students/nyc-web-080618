class CreateCops < ActiveRecord::Migration[5.2]
  def change
    create_table :cops do |t|
      t.string :name
      t.string :rank
      t.timestamps
    end
  end
end
