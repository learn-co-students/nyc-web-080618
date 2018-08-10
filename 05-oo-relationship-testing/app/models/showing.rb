class Showing
  attr_reader :movie, :theatre
  attr_accessor :time
  @@all = []

  def initialize(movie, theatre,time)
    @movie = movie
    @theatre = theatre
    @time = time
    @@all << self
  end

  def self.all
    @@all
  end

end # end Movie class
