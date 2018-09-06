class FarmersController < ApplicationController
  get '/farmers' do
    # look at app/views/farmers/index for the page we wish to render
    @farmers = Farmer.all
    erb :"farmers/index"
  end
end
