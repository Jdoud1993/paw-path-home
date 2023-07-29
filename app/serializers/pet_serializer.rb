class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :breed, :sex, :lost_or_found, :phone_number, :image, :user_id

  
  has_many :comments
end
