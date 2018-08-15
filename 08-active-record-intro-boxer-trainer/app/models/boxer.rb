class Boxer < ActiveRecord::Base
  # belongs_to(:trainer)
  belongs_to :trainer
  # def trainer # retrieve the trainer associated with this boxer
  #   # Trainer.all.find do |trainer|
  #   #   trainer.id == self.trainer_id
  #   # end
  #   Trainer.find(self.trainer_id) #find the trainer with an id of boxer_instance.trainer_id
  #   #code
  # end
end
