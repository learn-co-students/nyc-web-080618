class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }

  # def password=(plaintext_password) #should take plaintext pw and store the digested result in db as password_digest attr
  #   self.password_digest = BCrypt::Password.create(plaintext_password)
  # end
  #
  # def authenticate(plaintext_password) #should take in plaintext pw and compare against the pw digest we have for this particular user in the db
  #   if BCrypt::Password.new(self.password_digest) == plaintext_password
  #     self
  #   else
  #     false
  #   end
  # end

end
