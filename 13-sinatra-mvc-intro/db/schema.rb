ActiveRecord::Schema.define(version: 20180827183659) do

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.text   "snippet"
  end

end
