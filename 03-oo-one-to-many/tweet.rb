require 'pry'
class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end
  #
  # def message
  #   @message
  # end
  #
  # def user
  #   @user
  # end

  def self.all
    @@all
  end



end
