require 'rest-client'
require 'json'
# require 'pry'

ron_swanson_quote_response = RestClient.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')

parsed_quote = JSON.parse(ron_swanson_quote_response)

print parsed_quote
