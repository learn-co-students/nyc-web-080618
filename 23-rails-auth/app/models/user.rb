class User < ApplicationRecord
  validates :username, uniqueness: { case_sensitive: false }
end
