ActiveRecord::Schema.define(version: 2018_08_15_145224) do

  create_table "boxers", force: :cascade do |t|
    t.string "name"
    t.integer "trainer_id"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "name"
  end

end
