class AddImageToOffers < ActiveRecord::Migration
  def change
    add_column :offers,  :img, :string
  end
end
