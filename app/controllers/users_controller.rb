class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        if session.include? :user_id
            user = User.find(session[:user_id])
            render json: user, status: :created
        else
            render json: {error: ""}, status: :unauthorized
        end
    end

    private
    
    def user_params
        params.permit(:username, :password)
    end

end
