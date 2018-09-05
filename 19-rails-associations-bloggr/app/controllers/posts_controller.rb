class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit]
  # i want my user to be able to create a new post and associate it with a user
  # what do I need? 🤔
  # I need a route
  # a controller method to respond to that route
  # a form that will allow the user to create a new post
  # a controller method to handle the form submission
  def show
    # @post = Post.find(params[:id]) #-> must be instance var to pass down to view
    render :show
  end

  def new #-> renders a form to create a new POST
    @post = Post.new #-> pass blank post instance to form_for
    render :new
  end

  def create #-> handle form submission when user tries to create a new post
    @post = Post.create(post_params)
    if @post.valid?
      redirect_to post_path(@post) # /posts/1 NEW GET request
    else
      render :new
    end
  end

  def edit #-> render a form to EDIT and EXISTING Post; GET /posts/:id/edit
    # @post = Post.find(params[:id]) #-> must be instance var to pass down to form
    render :edit
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :user_id)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
