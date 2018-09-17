name = "andrew"

def say_name
  puts name
end

say_name # what will happen 🤔

not_hoisted()

def not_hoisted
  puts "Will this method execute 🤔"
end
