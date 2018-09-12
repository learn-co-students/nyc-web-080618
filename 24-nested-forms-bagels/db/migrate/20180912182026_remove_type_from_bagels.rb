class RemoveTypeFromBagels < ActiveRecord::Migration[5.2]
  def change
    # the table we want to remove from, the attribute/column, the data type
    remove_column :bagels, :type, :string
  end
end
