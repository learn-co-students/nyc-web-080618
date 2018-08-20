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

puts " who let the dogs out"
Dog.create!(name: Faker::FunnyName.name, breed: "cute", owner_id: Owner.all.sample.id)
Dog.create!(name: Faker::FunnyName.name, breed: "fluffy", owner_id: Owner.all.sample.id)
Dog.create!(name: Faker::FunnyName.name, breed: "poodle", owner_id: Owner.all.sample.id)
puts " dogs DONE"

puts " Walkers now walk it out... now walkt it out"
Walker.create!(name: Faker::LordOfTheRings.character, rating: [1,2,3,4,5].sample)
Walker.create!(name: Faker::LordOfTheRings.character, rating: [1,2,3,4,5].sample)
Walker.create!(name: Faker::LordOfTheRings.character, rating: [1,2,3,4,5].sample)
Walker.create!(name: Faker::LordOfTheRings.character, rating: [1,2,3,4,5].sample)
Walker.create!(name: Faker::LordOfTheRings.character, rating: [1,2,3,4,5].sample)
Walker.create!(name: Faker::LordOfTheRings.character, rating: [1,2,3,4,5].sample)
Walker.create!(name: Faker::LordOfTheRings.character, rating: [1,2,3,4,5].sample)
p "walkers are done"

p "dog walkers "
DogWalker.create(dog_id: Dog.all.sample.id, walker_id: Walker.all.sample.id)
DogWalker.create(dog_id: Dog.all.sample.id, walker_id: Walker.all.sample.id)
DogWalker.create(dog_id: Dog.all.sample.id, walker_id: Walker.all.sample.id)
DogWalker.create(dog_id: Dog.all.sample.id, walker_id: Walker.all.sample.id)
DogWalker.create(dog_id: Dog.all.sample.id, walker_id: Walker.all.sample.id)


p "dog walkers donezo."

p 'Own THAT DOG!'
Owner.create!(family_name: Faker::LordOfTheRings.character)
Owner.create!(family_name: Faker::LordOfTheRings.character)
Owner.create!(family_name: Faker::LordOfTheRings.character)
Owner.create!(family_name: Faker::LordOfTheRings.character)
Owner.create!(family_name: Faker::LordOfTheRings.character)
Owner.create!(family_name: Faker::LordOfTheRings.character)
p 'saved!'
