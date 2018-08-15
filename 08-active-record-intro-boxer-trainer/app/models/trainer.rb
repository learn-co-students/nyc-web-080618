class Trainer < ActiveRecord::Base
  has_many :boxers

  # def boxers
  #   puts "THIS IS WRONG OOPS"
  #   # Boxer.all.select do |boxer|
  #   #   boxer.trainer_id == self.id
  #   # end
  # end

end
