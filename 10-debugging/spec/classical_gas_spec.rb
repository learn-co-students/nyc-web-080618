require_relative '../fix_using_tests/classical_gas'

describe "classical_gas" do
  let(:dinobones) {GasStation.new("Dino Bones Gas and Grill", 60)}
  it "is able to change the price of a gas station" do
    expect(dinobones.unleaded_price = 100).to eq(100)
  end
end
