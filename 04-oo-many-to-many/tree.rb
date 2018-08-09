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

  ## Tree wants to know which squirrels are in my tree
  def squirrels_in_tree
    squirrels = my_nests.map do |nest|
      nest.squirrel
    end
    squirrels.uniq
  end

    ## Tree has how many squirrels?
  def how_many_squirrels
    squirrels_in_tree.count
  end

end # end Tree class
