require_relative '../program'

### works - doesnt work -
# Space complexity in terms of length
# wild edge cases

# Red - Green - Refactor

### .to be error

describe "is_palindrome?" do
  it "should be true if input is poop" do
    expect(is_palindrome?("poop")).to eq(true)
  end

  it "should be false if input is the word palindrome" do
    expect(is_palindrome?('palindrome')).to eq(false)
  end

  it "should be false if input is an empty string" do
    expect(is_palindrome?("")).to eq(false)
  end


  it "should be false if input is an string length of 1" do
    expect(is_palindrome?("a")).to eq(false)
  end

  it "should not care about whitespace" do
    expect( is_palindrome?('a man a plan a canal panama')).to be(true)
  end

  # tests with a bit more edgy cases, but are still happy

  it "should not care about capitalization" do
    expect( is_palindrome?('rAceCar')).to be(true)
    expect( is_palindrome?('Hello')).to be(false)
  end

  it "should not care about punctuation" do
    expect( is_palindrome?('a man a plan a canal, panama')).to be(true)
    expect( is_palindrome?('race!car')).to be(true)
    expect( is_palindrome?('hello, world')).to be(false)
  end

  it "should not care about special characters" do
    expect( is_palindrome?('råcecår')).to be(true)
  end

  # sad path tests (tests that expect errors) & extreme edge cases

  it "should fail if passed an integer or boolean" do
    expect { is_palindrome?(1) }.to raise_error(ArgumentError)
    expect {  is_palindrome?(true) }.to raise_error(ArgumentError)

  end

  it "should fail if passed an object or method" do
    expect {  is_palindrome?(Object.new) }.to raise_error(ArgumentError)
    expect {  is_palindrome?( is_palindrome?) }.to raise_error(ArgumentError)
  end

  it "should fail if passed an array or hash" do
    expect {  is_palindrome?([]) }.to raise_error(ArgumentError)
    expect {  is_palindrome?({}) }.to raise_error(ArgumentError)
  end

  it "should fail if passed self" do
    expect {  is_palindrome?(self) }.to raise_error(ArgumentError)
  end

end
