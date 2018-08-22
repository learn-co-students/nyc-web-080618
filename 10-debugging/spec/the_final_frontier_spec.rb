require_relative '../fix_using_tests/the_final_frontier'

describe "the_final_frontier" do
  it "`engage` should return the captain's log and crew greetings" do
    expect(engage).to eq(["Hello Geordi.", "Hello Data.", "Hello Worf.", "Hello William.", "Hello Beverly.", "Hello Deanna."])
  end
end
