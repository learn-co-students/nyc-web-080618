
### The world so far

- Create new Objects
  - Class.new(arguments) -- initialize

 - attr_accessor
 - Getter/Setter METHODS
  - @instance_variables
-@@class_variables -- CLASS

class School

flatiron = School.new(['G', 'E', 'J'])
flatiron.instructors => ['G', 'E', 'J']

- class Instructor  
  attr_accessor :name

def initlaize(name)
 @name = name

gary =  Instructor.new('Gary')
gary.name => "Gary"

def instructor_names
self.instructor.each do |instructor|
  instructor.name

flatiron.instructors => [<#gary2347238463287>]

### Objectives
One to Many
Single Source of Truth


## Objectives

- Implement one object to many objects relationship
  - One object has many objects
  - One object belongs to another object
    - A universe has many galaxies; a galaxy belongs to a universe
    - An author has many books; a book belongs to an author
    - A user has many tweets; a tweet belongs to a user
- Demonstrate single source of truth
- Infer type of method (class or instance) through naming conventions
- Review `self`

---

## Deliverables

- Create a User class. The class should have these methods:
  - `#initialize` which takes a username and have
  - an accessor method for the username
  - `#tweets` that returns an array of Tweet instances
  - `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
- Create a Tweet class. The class should have these methods:
  - `Tweet#message` that returns a string
  - `Tweet#user` that returns an instance of the user class
  - `Tweet.all` that returns all the Tweets created.
  - `Tweet#username` that returns the username of the tweet's user
