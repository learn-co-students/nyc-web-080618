class Tree
  attr_reader :species

  def initialize(species)
    @species = species
  end


## Tree has how many nests?
  def my_nests
    Nest.all.select do |nest|
      nest.tree == self
    end
  end

  def nest_count
    my_nests.count
  end

## Tree has how many squirrels?
  def squirrel_nests(squirrel_object)
    my_nests.select do |nest|
      nest.squirrel == squirrel_object
    end
  end

  def squirrel_count(squirrel_object)
    squirrel_nests(squirrel_object).count
  end




end # end Tree class
