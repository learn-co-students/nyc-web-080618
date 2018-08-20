class Walker < ActiveRecord::Base
  has_many :dog_walkers
  has_many :dogs, through: :dog_walkers
end
