require 'pry'

class Dog
    # attr_reader :breed
    attr_accessor :name, :breed, :age


  def initialize(name, breed, age)
    @name = name
    @breed = breed
    @age = age
  end

  ### attr_writer :breed
  # def breed
  #   @breed
  # end
  #
  # def breed=(new_breed)
  #   @breed = new_breed
  # end
  ### attr_writer for name
  # def name
  #   @name
  # end
  #
  # def name=(new_name)
  #   @name = new_name
  # end

  def one
    1
  end

end

fido = Dog.new("some name", "Labradorian", "OK!")
different_dog = Dog.new("your boi", "1 of the 101 dalmations", "OK!")

binding.pry





goodboi = Dog.new("name", "Labradorian2", "nah")
