class BakeriesController < ApplicationController
  def new
    @bakery = Bakery.new
    @bakery.bagels.build
    render :new
  end

  def create
    Bakery.create(bakery_params)

    redirect_to #somewhere
  end

  private

  def bakery_params
    params.require(:bakery).permit(:name, bagels_attributes: [:name, :ingredients])
  end
end
