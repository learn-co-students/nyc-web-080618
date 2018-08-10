class Theatre
    attr_accessor :location

    @@all = []

  def initialize(location)
    @location = location
    @@all << self
  end

  def self.all
    @@all
  end

end # end Theatre class
