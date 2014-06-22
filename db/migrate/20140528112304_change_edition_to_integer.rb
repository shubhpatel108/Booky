class ChangeEditionToInteger < ActiveRecord::Migration
  def up
  	execute 'ALTER TABLE books ALTER COLUMN edition TYPE integer USING (edition::integer)'
  end

  def down
  	execute 'ALTER TABLE books ALTER COLUMN edition TYPE integer USING (edition::text)'
  end
end
