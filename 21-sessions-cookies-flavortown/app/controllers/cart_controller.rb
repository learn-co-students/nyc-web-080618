class CartController < ApplicationController
  def update
    add_to_cart(params[:nacho_id]) # add to cart comes from ApplicationController
    flash[:notice] = "Successfully added #{params[:nacho_name]} to Cart!"
    redirect_to nachos_path
  end
end
