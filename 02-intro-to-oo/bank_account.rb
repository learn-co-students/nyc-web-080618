require 'pry'

class BankAccount
  attr_accessor :amount, :name, :array
  attr_reader :acct_num

  def initialize(amount=99999, acct_num, name, array)
    @amount=amount
    @acct_num = acct_num
    @name = name
    @array = array
  end

  def hit_the_lottery
    @amount= 9999999
  end

  def withdrawal(withdrawal_amount)
    if @amount < withdrawal_amount
      puts " you broke!"
    else
      @amount = @amount - withdrawal_amount
    end
  end

 def deposit(dep_amount)
   @amount += dep_amount
 end

end

cmr = BankAccount.new(500, 1, "checkin",["Garry", "Jon", "Your Boi"])

binding.pry
