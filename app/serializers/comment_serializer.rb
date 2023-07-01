class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body

  belongs_to :pet
  has_one :user
end
