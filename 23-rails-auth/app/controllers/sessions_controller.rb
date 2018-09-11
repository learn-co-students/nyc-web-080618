class SessionsController < ApplicationController
  # authorized comes from application_controller
  # skip_before_action 'unlocks' this portion of our app
  skip_before_action :authorized, only: [:new, :create]

  def new # show user a form to login w/ username/pw combo
    render :new
  end

  def create #handles form submission; should login a new user
    # find the user by the provided username
    # attempt to authenticate that user w/ provided pw
    user = User.find_by({ username: params[:username] })
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      # if they are who the claim to be, create a new session for that user in our app
      flash[:notice] = "Login Successful"
      redirect_to user
    else
      flash[:notice] = "Invalid username or password"
      redirect_to login_path
    end
  end

  def destroy
    # session[:user_id] = nil
    session.delete(:user_id)
    flash[:notice] = "Logout Successful"
    redirect_to login_path
  end
end
