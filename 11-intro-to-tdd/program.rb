require 'pry'

def is_palindrome?(word)
  # raise ArgumentError if word.class != String
  # if  word.length < 2
  #   false
  # else
  #   word.downcase.gsub(/\W/, "") == word.reverse.downcase.gsub(/\W/, "")
  # end

  raise ArgumentError if !word.is_a?(String)
  return false if word.length < 2

  downcased_word = word.downcase.gsub(/\W/,"")
  downcased_word == downcased_word.reverse

end
