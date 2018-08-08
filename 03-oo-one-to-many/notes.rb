### The world so far
- Create new objects .new(argument) calls #initialize
- attr accessor /reader /writer
  - getter setter methods

  - School, flatiron= School.new('flatiron school')
  -flatiron.instructors => ["e","g","j"]

  - Instructor, Garry = Instructor.new
  - flatiron.instructors => [<#Garry213123>]

  ### Objectives
   - One to Many --- Belongs to Has Many
   - Single source of truth
    - similar to single responsibility
    - i can ask the flatiron school about the instructors
      - THEN if i want information on the instructors i will ask
      the INSTRUCTOR CLASS for the information
    -
