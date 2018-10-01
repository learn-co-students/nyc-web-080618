class CatapultSerializer < ActiveModel::Serializer
  # belongs_to :castle #need to specify the relationships in my model AND serializer if I want to see that data in my JSON
  attributes :id, :name, :range
end
