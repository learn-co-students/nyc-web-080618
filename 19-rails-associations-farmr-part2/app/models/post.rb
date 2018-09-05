class Post < ApplicationRecord
  # ActiveRecord belongs_to provides a default validation for the presence and validity of a user_id;
  #we can make this optional by saying optional: true
  belongs_to :user # ->, optional: true
  # provides methods such as Post#user
  validates :title, :content, presence: true
end
