class PetsController < ApplicationController

    def index 
        render json: Pet.all
    end

end
