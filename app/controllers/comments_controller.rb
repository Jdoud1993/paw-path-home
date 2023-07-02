class CommentsController < ApplicationController

    def create
        comment = Comment.create(comment_params)
        if comment
            render json: comment, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity 
        end
    end

    def update
        comment = Comment.find_by(id: params[:id])
        if comment && session[:user_id] == comment.user_id
            comment.update(comment_params)
            render json: comment 
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
        params.permit(:body, :user_id, :pet_id)
    end
end
