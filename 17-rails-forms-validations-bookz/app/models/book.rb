class Book < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  # validates(:title, { presence: true })
  validate :min_num_pages # validate is for custom validation methods
  # validate(:min_num_pages)

  def min_num_pages
    # self -> book instance we are attempting to validate
    if self.num_pages < 5
      self.errors.add(:num_pages, 'Must be greater than 5!!! This is not a pamphlet!')
    end
  end
end
