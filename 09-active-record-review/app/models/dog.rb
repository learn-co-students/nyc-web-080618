class Dog  < ActiveRecord::Base
  has_many :dog_walkers
  has_many :walkers, through: :dog_walkers
  belongs_to :owner

  def save_me(owner)
    self.update_attributes(owner_id: owner.id)
  end

  def self.shelter
    self.all.select do |dog|
      dog.owner_id == nil
    end
  end
end
