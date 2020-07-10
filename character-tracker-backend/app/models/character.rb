class Character < ApplicationRecord
    has_many :items, dependent: :destroy
    accepts_nested_attributes_for :items
    validates :name, presence: true
    validates :klass, presence: true
    validates :race, presence: true
end
