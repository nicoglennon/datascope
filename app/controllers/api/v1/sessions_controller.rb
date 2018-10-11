class Api::V1::SessionsController < ApplicationController

  def new
    p logged_in?
    if logged_in?
      redirect_to '/@' + current_user.username
    end
  end

  def create
    if login(params[:email_or_username], params[:password])
      flash[:success] = 'Welcome back!'
      redirect_to '/@' + current_user.username
    else
      @error = 'Username/email and/or password is incorrect.'
      render 'new'
    end
  end

  def destroy
    p 'destroyed!'
    logout
    flash[:success] = 'See you!'
    redirect_to login_path
  end
end
