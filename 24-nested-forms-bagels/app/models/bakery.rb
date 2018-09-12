class Bakery < ApplicationRecord
  has_many :bagels
  accepts_nested_attributes_for :bagels
end
