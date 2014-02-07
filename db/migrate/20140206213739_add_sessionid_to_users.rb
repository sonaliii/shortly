class AddSessionidToUsers < ActiveRecord::Migration
  def up
    add_column :users, :session_id, :string
  end

  def down
    remove_column :users, :session_id
  end
end
