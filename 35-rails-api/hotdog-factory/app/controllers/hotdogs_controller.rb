class HotdogsController < ApplicationController
  before_action :set_hotdog, only: [:show, :edit, :update, :destroy]

  # GET /hotdogs
  # GET /hotdogs.json
  def index
    @hotdogs = Hotdog.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @hotdogs }
    end
  end

  # GET /hotdogs/1
  # GET /hotdogs/1.json
  def show
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @hotdog }
    end
  end

  # GET /hotdogs/new
  def new
    @hotdog = Hotdog.new
  end

  # GET /hotdogs/1/edit
  def edit
  end

  # POST /hotdogs
  # POST /hotdogs.json
  def create
    @hotdog = Hotdog.new(hotdog_params)

    respond_to do |format|
      if @hotdog.save
        format.html { redirect_to @hotdog, notice: 'Hotdog was successfully created.' }
        format.json { render :show, status: :created, location: @hotdog }
      else
        format.html { render :new }
        format.json { render json: @hotdog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hotdogs/1
  # PATCH/PUT /hotdogs/1.json
  def update
    respond_to do |format|
      if @hotdog.update(hotdog_params)
        format.html { redirect_to @hotdog, notice: 'Hotdog was successfully updated.' }
        format.json { render :show, status: :ok, location: @hotdog }
      else
        format.html { render :edit }
        format.json { render json: @hotdog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hotdogs/1
  # DELETE /hotdogs/1.json
  def destroy
    @hotdog.destroy
    respond_to do |format|
      format.html { redirect_to hotdogs_url, notice: 'Hotdog was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hotdog
      @hotdog = Hotdog.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def hotdog_params
      params.require(:hotdog).permit(:name, :ingredients)
    end
end
