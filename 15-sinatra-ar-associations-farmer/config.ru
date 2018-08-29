require './config/environment'

if ActiveRecord::Migrator.needs_migration?
  raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
end
# PATCH/PUT/DELETE hack that allows me to send patch put delete requests to my server
use Rack::MethodOverride
use FarmersController
use CowsController
run ApplicationController
