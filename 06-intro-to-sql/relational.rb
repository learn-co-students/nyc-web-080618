require 'pry'


class Person
  attr_accessor :name, :age

  @@all = []

  def initialize(name, age)
    @name = name
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end

  def dogs
    Dog.all.select do |dog|
      dog.owner == self
    end
  end


end



class Dog
  attr_accessor :owner, :name

  @@all = []

  def initialize(name, owner)
    @name = name
    @owner = owner
    @@all << self
  end

  def self.all
    @@all
  end

end


bob = Person.new("Bob", 26)
sue = Person.new("Sue", 30)


spot = Dog.new("Spot", bob)
kingHenry = Dog.new("King Henry", sue)




binding.pry
