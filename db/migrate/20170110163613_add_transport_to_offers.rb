class AddTransportToOffers < ActiveRecord::Migration
  def change
    add_column :offers,  :transport, :string
  end
end
