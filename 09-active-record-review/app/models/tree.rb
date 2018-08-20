class Tree < ActiveRecord::Base

  has_many :nests
  has_many :squirrels, through: :nests

end
