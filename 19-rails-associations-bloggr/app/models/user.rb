class User < ApplicationRecord
  has_many :posts
  # provide methods like User#posts
end
