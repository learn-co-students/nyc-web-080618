class Squirrel
    attr_reader :name

  def initialize(name)
    @name = name
  end

## Squirrel makes a new nest
  def make_nest(tree_object)
    Nest.new(self, tree_object)
  end

  ## Squirrel how many nests do I have?
  def my_nests
     Nest.all.select do |nest|
      nest.squirrel == self
    end
  end

    def nest_count
      my_nests.length
    end

    ## Squirrel wants to know which trees I have nests in?
    def which_trees
      my_nests.map do |nest|
        nest.tree.species
      end
    end


end # end Squirrel class
