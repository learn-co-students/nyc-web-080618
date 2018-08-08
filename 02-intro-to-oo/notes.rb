### What is an object?

=begin
x = 3
x.class

x = "hello there, general kenobi"
puts x.split()
String.new('new string')
## Initialize a instance of a class

puts x.send(:split)

instructors = ['jon','garry','Wangtron']
instructors.join()
instructors.send(:join, ' & ')


#dog = {"name" => "fido", "breed" => "corgi" }
#dog = {"name" => "fido", "breed" => "corgi" }
#dog = {"name" => "fido", "breed" => "corgi" }
#dog = {"name" => "fido", "breed" => "corgi" }






=end



require 'pry'
class BankAccount

  @@all = []

  attr_accessor :name
  attr_reader :balance

  def initialize(name, balance)
    @name = name
    @balance = balance

    @@all << self #the instance
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    @balance -= amount
  end

  def win_the_lottery
    self.deposit(999999)
  end

  def make_name_graham
    # name = "Graham"
    self.name = "Graham" #the instance
  end

  def self.all #the class

    self #the class
    @@all
  end

end


class String

def gainz
  "G is for GAinz"
end
