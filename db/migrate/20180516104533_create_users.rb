class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.binary :upload_file
      t.string :upload_filename

      t.timestamps
    end
  end
end
