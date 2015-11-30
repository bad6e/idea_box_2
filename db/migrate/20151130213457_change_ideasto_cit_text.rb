class ChangeIdeastoCitText < ActiveRecord::Migration
  def change
    enable_extension 'citext'

    change_column :ideas, :title, :citext
    change_column :ideas, :body, :citext
    change_column :ideas, :quality, :citext
  end
end
