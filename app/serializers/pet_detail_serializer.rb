class PetDetailSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :breed, :sex, :lost_or_found, :phone_number, :image

  has_many :comments
end
