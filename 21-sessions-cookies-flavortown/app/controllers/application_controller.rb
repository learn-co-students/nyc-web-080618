class ApplicationController < ActionController::Base
  # helper_method :get_items_from_cart
  
  def cart # return the contents of the cart
    session[:cart] ||= []
    # if session[:cart]
    #   session[:cart]
    # else
    #   session[:cart] = []
    # end
  end

  def add_to_cart(nacho_id) #add a nacho_id to the cart
    cart << nacho_id #call the cart method, which returns an array, add an id to this array
  end

  def get_items_from_cart
    @cart_items = Nacho.find(cart)
  end
end
