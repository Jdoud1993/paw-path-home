class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.string :breed
      t.string :sex
      t.string :lost_or_found
      t.string :phone_number
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
