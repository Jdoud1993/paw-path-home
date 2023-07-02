class PetsController < ApplicationController

    def index 
        render json: Pet.all
    end

    def show
        pet = Pet.find_by(id: params[:id])
        if pet
            render json: pet, include: ['comments', 'comments.user']
        else
            render json: {error: "Pet not found"}, status: :not_found 
        end 
    end

    def mypets
        mypets = Pet.where(user_id: session[:user_id])
        render json: mypets
    end

end
