require_relative '../fix_using_tests/method_man'

describe "method_man" do
  it "`start_game` should return greetings for each players name" do
    expect(start_game("Rocky", "Bullwinkle")).to eq("Hello Rocky & Bullwinkle")
  end
end

describe "method_man" do
  it "`play_game` should return a string that states which player is better" do
    expect(play_game("Jay-Z", "Beyonce")).to eq("Jay-Z is better than Beyonce")
  end
end
