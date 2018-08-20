class Squirrel < ActiveRecord::Base
has_many :nests
has_many :trees, through: :nests

end
