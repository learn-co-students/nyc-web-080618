require 'pry'
require 'faker'

puts "making dem squirrels tho"
Squirrel.create(name: Faker::LordOfTheRings.character)
# Squirrel.create(name: Faker::LordOfTheRings.character)
# Squirrel.create(name: Faker::LordOfTheRings.character)
#
# Squirrel.create(name: Faker::LordOfTheRings.character)
puts "done with squirrels"


puts "making dem trees tho"
Tree.create(name: Faker::DragonBall.character, kind: Faker::Food.fruits)
Tree.create(name: Faker::DragonBall.character, kind: Faker::Food.fruits)
Tree.create(name: Faker::DragonBall.character, kind: Faker::Food.fruits)
Tree.create(name: Faker::DragonBall.character, kind: Faker::Food.fruits)
puts "done with trees"

puts "making nests"
Nest.create(name: Faker::FunnyName.name, squirrel_id:9, tree_id:3)
Nest.create(name: Faker::FunnyName.name, squirrel_id:2, tree_id:4)
Nest.create(name: Faker::FunnyName.name, squirrel_id:2, tree_id:2)
Nest.create(name: Faker::FunnyName.name, squirrel_id:3, tree_id:1)
Nest.create(name: Faker::FunnyName.name, squirrel_id:3, tree_id:3)
Nest.create(name: Faker::FunnyName.name, squirrel_id:4, tree_id:2)
Nest.create(name: Faker::FunnyName.name, squirrel_id:5, tree_id:1)
puts " nests done."
