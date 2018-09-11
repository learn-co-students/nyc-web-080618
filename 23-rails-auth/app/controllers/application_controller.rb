class ApplicationController < ActionController::Base
  before_action :authorized
  helper_method(:current_user, :logged_in?) #allows me to call a particular method in my VIEWS

  def current_user
    User.find_by({ id: session[:user_id] })
  end

  def logged_in?
    !!current_user
  end

  def authorized
    unless logged_in?
      flash[:notice] = "Please login to see this page"
      redirect_to login_path
    end
  end
end
