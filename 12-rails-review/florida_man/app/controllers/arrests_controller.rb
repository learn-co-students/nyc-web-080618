class ArrestsController < ApplicationController

  def index
    @arrests = Arrest.all
  end



end
