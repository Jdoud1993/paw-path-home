class User < ApplicationRecord

    has_secure_password

    validates :username, presence: true, uniqueness: true

    has_many :comments
    has_many :pets
    has_many :pets, through: :comments

end
