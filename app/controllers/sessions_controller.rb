class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized 
        end
    end

    def destroy
        if session.include? :user_id
            session.delete :user_id
            head :no content
        else
            render json: {errors: ["not logged in"]}, status: :unauthorized 
        end 
    end

end
