class PetsController < ApplicationController
    skip_before_action :authorized, only: :index
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

    def create
        pet = Pet.create(pet_params)
        if pet
            render json: pet, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity 
        end
    end

    def destroy
        pet = Pet.find_by(id: params[:id])
        if pet && session[:user_id] === pet.user_id
            pet.destroy
            render json: {}
        else
            render json: {errors: "You may only delete a pet that you have posted."}, status: :unauthorized 
        end
    end

    def update
        pet = Pet.find_by(id: params[:id])
        if pet && session[:user_id] == pet.user_id
            pet.update(pet_params)
            render json: pet
        else 
            render json: {errors: "You may only update pets that you have posted."}, status: :unauthorized
        end
    end

    private
    
    def pet_params
        params.permit(:name, :species, :breed, :sex, :lost_or_found, :phone_number, :image, :user_id)
    end
end
