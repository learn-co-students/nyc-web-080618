require 'pry'
require_relative 'song'

class App
  def call(env)
    # TODO: create some new songs
    puts env
    binding.pry

    req = Rack::Request.new(env)
    resp = Rack::Response.new

    if req.path =~ /songs/
      song_list_items = Song.all.map { |song| "<li>#{song.name}</li>" }.join

      resp.write("
          <h1>Songs List</h1>
          <ul>
            #{song_list_items}
          </ul>
        ")

    elsif req.path =~ /artists/
      resp.write('<h1>Artists List</h1>')
    else
      resp.write('<h1>Not Found</h1>')
    end

    resp.finish
  end
end
