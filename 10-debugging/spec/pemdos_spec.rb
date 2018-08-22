require_relative '../fix_using_tests/pemdos'

describe "pemdos" do
  it "`snake_it_up` adds the letter 's' ten times before any word that starts with 's'" do
  expect(snake_it_up("surprise!")).to eq("sssssssssssurprise!")
  end
end
