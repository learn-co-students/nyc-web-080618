class ApplicationController < ActionController::API
  def random_delay
    puts "sleeping..."
    sleep (0..2).to_a.sample
    puts "awake!"
  end
end
