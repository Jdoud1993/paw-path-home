class User < ApplicationRecord

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, length: {in: 6..20}

    has_many :comments
    has_many :posted_pets, :class_name => "Pet", :foreign_key => "user_id"
    has_many :pets, through: :comments

end
