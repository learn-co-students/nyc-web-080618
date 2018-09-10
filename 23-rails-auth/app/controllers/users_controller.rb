class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def show
    render :show
  end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      flash[:notice] = "Sign Up Successful! Welcome, #{@user.username}!"
      # redirect_to user_path(@user)
      redirect_to @user
    else
      render :new
    end
  end

  def edit
    # set_user is called with before_action; @user is already set
    render :edit
  end

  def update
    # @user set by set_user
    if @user.update(user_params)
      flash[:notice] = "Profile Updated!"
      redirect_to @user
    else
      render :new
    end
  end

  def destroy
    @user.destroy
    flash[:notice] = "Account for #{@user.username} deleted 😭"
    redirect_to new_user_path
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
