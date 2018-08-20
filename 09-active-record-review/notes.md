### Create the Relationships
Many-to-Many
Squirrel has_many Tree
Tree has_many_Squirrel
Nest is the Join table


### Create the models
``` ruby
class Squirrel < ActiveRecord::Base
  Squirrel.all
class Nest < ActiveRecord::Base
class Tree < ActiveRecord::Base
```

#### Test - rake :console
### Bundle install
### Create the migrations
```
rake db:create_migration NAME=create_squirrels
rake db:create_migration NAME=create_tree
rake db:create_migration NAME=create_nests
```
#### Test
### Create table details
```ruby
def change
  create_table :squirrels do |t|
    t.string :name
  end
end
```
#### Test
- look at the schema
### Migrate
```
rake db:migrate
```
#### Test -- Look at the schema.
### Create the Seeds!
#### Test
```ruby
require 'faker'
Squirrel.create(name: Faker::LordOfTheRings.character)
```

### Test the Seeds / Models / Associations
```
Squirrel.all
Squirrel.first.trees.first.name
```
#### Test
### Get the party Started!
#### Test
