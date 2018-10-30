class Cat < ApplicationRecord
  def self.random
    self.all.sample
  end
end
