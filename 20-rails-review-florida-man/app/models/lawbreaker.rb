class Lawbreaker < ApplicationRecord
  has_many :arrests
  has_many :cops, through: :arrests
end
