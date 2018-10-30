class CatsController < ApplicationController
  before_action :random_delay

  def random_cat
    render json: Cat.random
  end
end
