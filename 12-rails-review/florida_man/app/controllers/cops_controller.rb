class CopsController < ApplicationController

  def index
    @cops = Cop.all
  end

  def show
    @cop = Cop.find(params[:id])
  end


  def new
    @cop = Cop.new
  end

  def create
    @cop = Cop.new(cop_params)
    if @cop.save
      redirect_to cop_path(@cop)
    else
      render :new
    end
  end

  def destroy
    Cop.find(params[:id]).destroy
    redirect_to cops_path
  end


private

  def cop_params
    params.require(:cop).permit(:name, :rank)
  end


end
