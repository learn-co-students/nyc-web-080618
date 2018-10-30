# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


def rate_limit(seconds)
  sleep seconds
end

def get_random_cat_url
  response = RestClient.get 'http://aws.random.cat/meow'
  json = JSON.parse(response)
  json["file"]
end

def get_random_dog_url
  response = RestClient.get 'http://shibe.online/api/shibes'
  json = JSON.parse(response)
  json.first
end

puts "Creating random cats..."
20.times do
  Cat.create(
    name: Faker::Cat.name,
    url: get_random_cat_url,
    age: (1..25).to_a.sample
  )
  rate_limit((1..3).to_a.sample) # random rate limiting
end
puts "Meow!"

puts "Creating random dogs..."
20.times do
  Dog.create(
    name: Faker::Dog.name,
    url: get_random_dog_url,
    age: (1..25).to_a.sample
  )
  rate_limit((1..3).to_a.sample) # random rate limiting
end
puts "Bow wow!"

puts "Creating random users..."
20.times do
  User.create(
    name: Faker::Superhero.name,
    email: Faker::Internet.email
  )
end
puts "Human human?"
