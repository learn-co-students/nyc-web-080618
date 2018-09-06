class Arrest < ApplicationRecord

  belongs_to :lawbreaker
  belongs_to :cop
end
