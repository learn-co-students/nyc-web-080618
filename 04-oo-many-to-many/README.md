# ruby-many-to-many-relationships

## SWBATs

* Implement both sides of a many to many relationships
* Practice keeping groups of data related to classes on the class as a class variable
* Demonstrate single source of truth by not storing collections of objects on other objects
* Demonstrate single source of truth by not storing one object in multiple collections



### Review 0bject Orientation

#### Passing objects to methods and initializers

```ruby
class_room = Classroom.new
class_room.students = #['forrest', 'Michael']

class_room.students => #[<#Student#aiwojr8qu>,<#Student#a234234u>]

Student.new('Yan')
Student.new(String.new('Yan'))
```

#### Readers and writers
```ruby
def name
  @name
end
attr_reader :name
```
### Intro to many to many relationships

#### One to many relationships


#### Modeling more complex relationships
* Patient has_many Doctors
* Doctors has_many Patients
* Join table is Appointments
