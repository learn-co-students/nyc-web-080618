class CreateBooks < ActiveRecord::Migration
  def change
    create_table(:books) do |t|
      t.string :title
      t.text :snippet
    end
  end
end
