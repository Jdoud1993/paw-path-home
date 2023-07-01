class CommentsController < ApplicationController

    def create
        comment = Comment.create(comment_params)
        if comment.valid?
            render json: comment, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity 
        end
    end

    private
    
    def comment_params
        params.permit(:body, :user_id, :pet_id)
    end
end
