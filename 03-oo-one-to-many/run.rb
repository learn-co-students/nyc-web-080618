
require 'pry'
require_relative 'tweet'
require_relative 'user'



johnny = User.new('J cash')
garry = User.new('G moneyy')
parker = User.new('parker')

jt = Tweet.new("questions all day", johnny)
jt2 = Tweet.new("questions all day2", johnny)
gt = Tweet.new("uhhhh kill all bugs", garry)
gt2 = Tweet.new("hmm idont know", garry)
gt3 = Tweet.new("nah", garry)
pt = Tweet.new("class method class class variable", parker)
pt2 = Tweet.new("cardio kills those gainz tho", parker)


binding.pry
