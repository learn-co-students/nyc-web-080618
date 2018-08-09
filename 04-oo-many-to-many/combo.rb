require 'pry'
require_relative 'squirrel'
require_relative 'tree'
require_relative 'nest'


tree1 = Tree.new('Apple')
tree2 = Tree.new('Oak')
squirrel1 = Squirrel.new('Brown')
squirrel2 = Squirrel.new('Blue')


squirrel1.make_nest(tree2)
nest1 = Nest.new(squirrel1, tree2)
nest2 = Nest.new(squirrel2, tree2)
nest3 = Nest.new(squirrel1, tree2)



## Squirrel wants to know which trees I have nests in?

## Tree has how many nests?
## Tree has how many squirrels?
binding.pry
