class DogsController < ApplicationController
  before_action :random_delay
  
  def random_dog
    render json: Dog.random
  end
end
