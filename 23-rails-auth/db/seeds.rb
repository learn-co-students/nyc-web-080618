20.times do
  User.create({
    username: Faker::LordOfTheRings.character,
    password: 'hotdog',
    avatar: Faker::Avatar.image
  })
end
