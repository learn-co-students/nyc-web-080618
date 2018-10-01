class Api::V1::CatapultsController < ApplicationController
  def index
    if params[:search] #api/v1/catapults?search=400
      @catapults = Catapult.find_by(range: params[:search])
    end
    @catapults = Catapult.all
    render({ json: @catapults }, status: :ok)
  end

  def show #/api/v1/catapults/:id
    @catapult = Catapult.find(params[:id])
    # render json: @catapult, status: :ok
    render json: CatapultSerializer.new(@catapult), status: :ok
  end

  def create # POST request to api/v1/catapults
    # @catapult = Catapult.create({ name: params[:catapult][:name], range: params[:catapult][:range] })
    @catapult = Catapult.create(catapult_params)
    render json: @catapult, status: :created
  end

  private
  def catapult_params
    params.require(:catapult).permit(:name, :range)
  end
end
