class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.text :snippet
      t.integer :num_pages

      t.timestamps
    end
  end
end
