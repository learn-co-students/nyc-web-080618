class NachosController < ApplicationController
  before_action :find_nacho, only: [:show]
  
  def index # /nachos
    @nachos = Nacho.all
    render(:index)
  end

  def show
    #before_action called first
    render(:show)
  end

  private

  def find_nacho
    @nacho = Nacho.find(params[:id])
  end
end
