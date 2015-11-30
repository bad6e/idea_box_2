class ChangeDefaultIdeas < ActiveRecord::Migration
  def change

    enable_extension 'citext'
    change_column :ideas, :quality, :citext, :default => 'swill'
  end
end
