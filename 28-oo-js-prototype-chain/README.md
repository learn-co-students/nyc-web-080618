# Inheritance and the prototype chain

## Outline

- Understand the benefits of sharing properties and behavior
- Answer (**Why?**)
  - Why is inheritance/sharing useful?
  - What are we sharing?
- **How it works?**
  - `JS`'s and `Ruby`'s inheritance model similarities and differences
  - Understand the `Prototype Chain`
  - Create objects using `new` and `Constructor` functions
  - *Assignment*: Build your own object
  - `new` vs Object.create
- **How we will likely use it?**
  - Classes (syntactic sugar on the `prototype chain` )
  - Refactor constructor to adopt the class syntax

---

### Object Creation in JavaScript

- Let's imagine we have an application that needs to construct robot objects in JavaScript. Each robot should have a `name`, `weight`, and `specialty`. We could create several using the object literal syntax:

```javascript
const robot1 = { name: 'sparko', weight: 1000, specialty: 'making sparks' }
const robot2 = { name: 'the iron giant', weight: 9999999, specialty: 'being giant and made of iron' }
const robot3 = { name: 'bender', weight: 500, specialty: 'bending things' }
```

- While this approach works, it's extremely tedious. We could instead choose to write a function that constructs objects for us (these are called factory functions in JavaScript):

```javascript
function robotFactory(name, weight, specialty) {
  const robot = { name, weight, specialty } //ES6 shorthand syntax
  // const robot = { name: name, weight: weight, specialty: specialty}
  return robot
}

const robot1 = robotFactory('sparko', 1000, 'making sparks')
const robot2 = robotFactory('the iron giant', 9999999, 'being giant and made of iron')
const robot3 = robotFactory('bender', 500, 'bending things')
```

- Quick note about the snippet above: in modern JavaScript, ES6 and later, we can create objects using a shorter syntax. If a key/value pair share the same name, we can abbreviate our statement like so: `{ name: name }` becomes `{ name }`. Both will create an object with a key of name pointing to whatever value is stored in the variable called `name`.

- Let's add some functionality to our robots. We _could_ create a function that takes in a particular robot object as an argument:

```javascript
function rechargeBatteries(robot) {
  console.log(`${robot.name} is recharging its batteries`)
}

rechargeBatteries(robot1) //'sparko is recharging its batteries'
rechargeBatteries(robot2) //'the iron giant is recharging its batteries'
rechargeBatteries(robot3) //'bender is recharging its batteries'
```

- Again, this approach works but it would be much easier to create a method on our robot objects to handle this functionality. We can also leverage the value of `this` in our method:

```javascript
function robotFactory(name, weight, specialty) {
  const robot = {
    name,
    weight,
    specialty,
    rechargeBatteries: function() {
      console.log(`${this.name} is recharging its batteries`)
    }
  }
  return robot
}

const robot1 = robotFactory('sparko', 1000, 'making sparks')
const robot2 = robotFactory('the iron giant', 9999999, 'being giant and made of iron')
const robot3 = robotFactory('bender', 500, 'bending things')

robot1.rechargeBatteries() //'sparko is recharging its batteries'
```

- Recall that a function (declared with the `function` keyword) will resolve `this` based on its **execution context**. If `rechargeBatteries` is called **on** robot1, `robot1.rechargeBatteries`, `this` will be `robot1`.

- Again, this is _getting better_ but there's still a flaw in our approach:

```javascript
robot1.rechargeBatteries === robot2.rechargeBatteries // false
```

![scream emoji](https://media.giphy.com/media/TK8bDNcLU1F16/giphy.gif)

- `robot1.rechargeBatteries` is a different function, occupying a different place in memory than `robot2.rechargeBatteries`. **We are wasting memory by constantly redeclaring `rechargeBatteries` every time we create a new robot**. This is _bad_. We don't want to be wasteful.

- In Ruby this problem was easily solved by using class based inheritance:

```ruby
class Robot
  attr_reader :name, :weight, :specialty

  def initialize(name, weight, specialty)
    @name = name
    @weight = weight
    @specialty = specialty
  end

  def recharge_batteries
    puts "#{self.name} is recharging its batteries"
  end

end

robot1 = Robot.new('sparko', 1000, 'making sparks')
robot1.recharge_batteries #=> sparko is recharging its batteries
```

---

#### Prototypal Inheritance

- JavaScript however, **does not have classes**. Ruby has these special things called _classes_ that allow us to create blueprints for our instances. JavaScript relies on prototypal inheritance. In essence, almost everything in JavaScript is an object: functions, object literals, even arrays. JavaScript objects have a chain of prototypes; other objects linked together. If a method is not defined on a particular object, JavaScript will look _up the chain of prototypes_ (which are plain old JavaScript objects) until it either finds the method or errors out
  - "When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
  Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain." - [MDN Article on Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

- We can leverage this inheritance model to avoid duplicating the `rechargeBatteries` function. First, let's update our `robotFactory` so that it is a [constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor). A constructor function is a JavaScript function that creates object "instances." We'll use the `new` operator to create our robots:

```javascript
function robotFactory(name, weight, specialty) {
  this.name = name
  this.weight = weight
  this.specialty = specialty
}

const robot1 = new robotFactory('sparko', 1000, 'making sparks')
const robot2 = new robotFactory('the iron giant', 9999999, 'being giant and made of iron')
const robot3 = new robotFactory('bender', 500, 'bending things')
```

- Recall that when a function is called with the `new` operator––`new robotFactory('sparko', 1000, 'making sparks')`––`this` will point to the **newly created object**. Writing this constructor function also _adds_ `robotFactory` to the chain of prototypes for these newly created objects:

```javascript
robot1.__proto__ // robotFactory
```

- Let's leverage the prototype chain so we can avoid duplicating `rechargeBatteries`:

```javascript
function robotFactory(name, weight, specialty) {
  this.name = name
  this.weight = weight
  this.specialty = specialty
}

robotFactory.prototype.rechargeBatteries = function() {
  console.log(`${this.name} is recharging its batteries`)
}

const robot1 = new robotFactory('sparko', 1000, 'making sparks')
const robot2 = new robotFactory('the iron giant', 9999999, 'being giant and made of iron')
const robot3 = new robotFactory('bender', 500, 'bending things')

robot1.rechargeBatteries() //'sparko is recharging its batteries'
robot2.rechargeBatteries() //'the iron giant is recharging its batteries'
robot3.rechargeBatteries() //'bender is recharging its batteries'
```

- We're no longer duplicating `rechargeBatteries`:

```javascript
robot1.rechargeBatteries === robot2.rechargeBatteries // true
```

---

#### "Classes" in JavaScript

- "JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript." - [MDN Article on the `class` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- Although we can use the `class` keyword in modern JavaScript, the language **does not support true object orientation**. JS still relies on a prototypal inheritance model and "classes" are in fact **_functions_** (which are technically objects). Let's see an example of the `class` keyword in use:

```javascript
class Robot {
  constructor(name, weight, specialty) {
    this.name = name
    this.weight = weight
    this.specialty = specialty
  }

  rechargeBatteries() {
    console.log(`${this.name} is recharging its batteries`)
  }
}

const robot1 = new Robot('sparko', 1000, 'making sparks')
const robot2 = new Robot('the iron giant', 9999999, 'being giant and made of iron')
const robot3 = new Robot('bender', 500, 'bending things')

robot1.rechargeBatteries() //'sparko is recharging its batteries'
robot2.rechargeBatteries() //'the iron giant is recharging its batteries'
robot3.rechargeBatteries() //'bender is recharging its batteries'
```

- Some notes on the snippet above:
  - "The `constructor` method is a special method for creating and initializing an object created with a `class`. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a `constructor` method." - [MDN Article on `class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - When using the `new` operator on a `class`, JavaScript will look for and invoke this special `constructor` function. You can think of this as being _similar_ to Ruby's `initialize` method. It is, however, not the same because JavaScript is not actually object oriented. The `class` syntax is just syntactic sugar over our previous example that manually added methods to the objects in our robot's prototype chain.

---

### External Resources
- [MDN Creating Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [MDN Article on Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN Constructor Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
- [MDN Article on the `class` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Master the JS Interview: Difference Between Prototypal and Class Inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
