class Movie
  attr_accessor :title, :rating
  @@all = []

  def initialize(title, rating)
    @title = title
    @rating = rating
    @@all << self
  end

  def self.all
    @@all
  end

# Movie wants to see all theatres this
# PARTICULAR  movie is showing
def theatre_showing
  #get all the showings
  # for each instance of showings
  # get the show that matches THIS PARTULAR Movie
  showing_arr = Showing.all.select do |showing_instance|
    #binding.pry
    showing_instance.movie == self
  end
  showing_arr.map do |showing|
    binding.pry
    showing.theatre.location
  end
end

# How do i test this? Where should i put the binding?
# Showing.all.select { |x| x == true }


end # end Movie class
