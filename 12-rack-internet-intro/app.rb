# module Rack
#   class Request
#     def initialize(env_hash)
#       @env_hash = env_hash
#     end
#   end
# end

require 'pry'
require_relative 'song'

class App
  def call(env)
    # TODO: create some new songs
    puts env
    # binding.pry

    req = Rack::Request.new(env)
    resp = Rack::Response.new

    Song.new('single ladies')
    Song.new('hello')
    Song.new('dreams')
    Song.new('go your own way')

    if req.path =~ /songs/
      song_list_items = Song.all.map { |song| "<li>#{song.title}</li>" }.join

      resp.write("
          <h1>Songs List</h1>
          <ul>
            #{song_list_items}
          </ul>
        ")

    elsif req.path =~ /artists/
      resp.write('<h1>Artists List</h1>')
    else
      resp.write('<div>
        <h1>Not Found</h1>
        <img src="https://i.kym-cdn.com/entries/icons/original/000/023/677/Screen_Shot_2017-08-15_at_11.57.51_AM.png" />
        </div>')
    end

    resp.finish
  end
end
