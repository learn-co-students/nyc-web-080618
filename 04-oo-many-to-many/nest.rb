class Nest
    attr_reader :squirrel, :tree

    @@all = []

  def  initialize(squirrel, tree)
    @squirrel = squirrel
    @tree = tree
    @@all << self
  end

  def self.all
    @@all
  end

end #end Nest Class
