class CreateOffers < ActiveRecord::Migration
  def change
    create_table :offers do |t|
      t.string :destination
      t.integer :nights
      t.integer :price
      t.string :description
      t.string :link
    end
  end
end
