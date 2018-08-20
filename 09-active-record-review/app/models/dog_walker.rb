class DogWalker < ActiveRecord::Base
belongs_to :dog
belongs_to :walker
end
