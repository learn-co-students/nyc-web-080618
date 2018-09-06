class DonutsController < ApplicationController
  before_action :find_donut, only: [:show, :destroy]

  def new #show the user a form to create a new donut
    # rails will BY DEFAULT look at app/views/donuts for all the views for this controller
    @donuts = Donut.new
    render :new
  end

  def create
    # @donut = Donut.create(donut_params)
    @donut = Donut.new(donut_params)

    if @donut.save
      # DO SOME STUFF
    else
      # DONUT IS NOT VALID; DO SOME OTHER STUFF
    end
    #code
  end

  def show # GET /donuts/1, R in CRUD (READ)
    # find_donut is called before this method; @donut is set
    render :show
  end

  def profile
    # render :profile
  end

  def destroy # DELETE /donuts/2 D in CRUD (DELETE)
    # find_donut is called before this method; @donut is set
    @donut.destroy
  end

  private
  def find_donut
    @donut = Donut.find(params[:id])
  end
end
