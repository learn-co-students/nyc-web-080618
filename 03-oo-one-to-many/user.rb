require 'pry'

class User
    attr_accessor :username

  def initialize(username)
    @username = username
  end
  #
  # def username
  #   @username
  #
  # end

  def tweets
    Tweet.all.select do |tweet|
      #condition
      tweet.user == self
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
    
  end


end
