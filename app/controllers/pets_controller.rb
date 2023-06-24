class PetsController < ApplicationController

    def index 
        render json: Pet.all, status: :ok
    end

end
