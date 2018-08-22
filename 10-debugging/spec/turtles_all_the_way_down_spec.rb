require_relative '../fix_using_tests/turtles_all_the_way_down'

describe "turtles_all_the_way_down" do
  it "`turtle_traits` should be able to iterate through the array without breaking." do
    expect(turtle_traits(turtles)).to eq([["serious", "leader"], ["party dude"], ["cool", "rude"], ["loves being a turtle"]])
  end
end
