class PetsController < ApplicationController

    def index 
        render json: Pet.all
    end

    def show
        pet = Pet.find_by(id: params[:id])
        if pet
            render json: pet, include: ["comments"]
        else
            render json: {error: "Pet not found"}, status: :not_found 
        end 
    end

end
