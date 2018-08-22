require_relative '../first_priority/that_was_unexpected'

describe "that_was_unexpected" do
  let(:baller) {Person.new('Jordan', true)}
  it "should tell me if the Person is a ballin candy lover" do
    expect(baller.ballin_candy_lover?).to eq("Aw sweet, this cat loves them some candy!")
  end
end
