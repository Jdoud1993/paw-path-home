class Comment < ApplicationRecord

    validates :body, presence: true
    validates :user_id, presence: true
    validates :pet_id, presence: true
   

    belongs_to :user
    belongs_to :pet

end
