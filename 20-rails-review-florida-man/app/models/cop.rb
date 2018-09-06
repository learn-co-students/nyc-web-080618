class Cop < ApplicationRecord
  has_many :arrests
  has_many :lawbreakers, through: :arrests
end
