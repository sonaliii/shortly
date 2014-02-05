class AddUsersTable < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :username
      t.password :password
      t.string :firstname
      t.string :lastname
      t.timestamps
    end
  end
  def down
    drop_table :users
  end
end
