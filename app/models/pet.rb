class Pet < ApplicationRecord

    validates :name, presence: true
    validates :species, presence: true
    validates :breed, presence: true
    validates :sex, presence: true
    validates :lost_or_found, presence: true
    validates :phone_number, presence: true
    validates :image, presence: true

    belongs_to :user
    has_many :comments, dependent: :delete_all
    has_many :users, through: :comments
    
end
