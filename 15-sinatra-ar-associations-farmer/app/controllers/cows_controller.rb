class CowsController < ApplicationController
  get '/cows' do
    @cows = Cow.all
    erb :'/cows/index'
  end

  get '/cows/new' do
    @farmers = Farmer.all
    erb :'/cows/new'
  end

  post '/cows' do
    @cow = Cow.create(
      name: params[:name],
      weight: params[:weight],
      farmer_id: params[:farmer_id]
    )
    redirect '/cows'
  end

  delete '/cows/:id' do
    # params-> {_method: 'delete', cow_id: '1'}
    # find and destroy the cow based on id sent in params
    Cow.find(params[:id]).destroy
    redirect '/cows'
  end
end
