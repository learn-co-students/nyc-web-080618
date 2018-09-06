# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
p 'making cops'
Cop.create!(name: Faker::Name.name, rank: Faker::ElderScrolls.creature)
Cop.create!(name: Faker::Name.name, rank: Faker::ElderScrolls.creature)
Cop.create!(name: Faker::Name.name, rank: Faker::ElderScrolls.creature)
Cop.create!(name: Faker::Name.name, rank: Faker::ElderScrolls.creature)
Cop.create!(name: Faker::Name.name, rank: Faker::ElderScrolls.creature)
Cop.create!(name: Faker::Name.name, rank: Faker::ElderScrolls.creature)


p 'florida man strikes again'
Lawbreaker.create!(name:Faker::BreakingBad.character, teeth: rand(1..32))
Lawbreaker.create!(name:Faker::BreakingBad.character, teeth: rand(1..32))
Lawbreaker.create!(name:Faker::BreakingBad.character, teeth: rand(1..32))
Lawbreaker.create!(name:Faker::BreakingBad.character, teeth: rand(1..32))
Lawbreaker.create!(name:Faker::BreakingBad.character, teeth: rand(1..32))
Lawbreaker.create!(name:Faker::BreakingBad.character, teeth: rand(1..32))
Lawbreaker.create!(name:Faker::BreakingBad.character, teeth: rand(1..32))



p 'FAKE NEWS'
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
Arrest.create!(cop_id: Cop.all.sample.id, lawbreaker_id: Lawbreaker.all.sample.id, crime: Faker::HarryPotter.spell)
