class CommentsController < ApplicationController

    def create
        current_user = User.find(session[:user_id])
        comment = current_user.comments.create!(comment_params)
        pet = Pet.find(comment.pet_id)
        if comment
            render json: pet, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity 
        end
    end

    def update
        comment = Comment.find_by(id: params[:id])
        if comment && session[:user_id] == comment.user_id
            comment.update(comment_params)
            pet = Pet.find(comment.pet_id)
            render json: pet
        else 
            render json: {errors: "You may only update comments that you have posted."}, status: :unauthorized
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment && session[:user_id] === comment.user_id
            comment.destroy
            render json: {}
        else
            render json: {errors: "You may only delete a comment that you have posted."}, status: :unauthorized 
        end
    end

    private
    
    def comment_params
        params.permit(:body, :pet_id)
    end
end
