# This in JavaScript

![](https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif)

## Objectives

- Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
- Leverage Ruby's `self` to frame our JS `this` conversation (will get us 40% of the way)
- Recognize and value the differences
- Understand how we might be able to leverage `this` in JavaScript
- When is the value of `this` set? When it's **NOT** set?

---

### Review of `self` in Ruby

- There are _some_ similarities between `this` in JavaScript and `self` in Ruby. Looking at the similarities will get us closer to understanding JavaScript's `this`. **Please do not think of them as being the same thing, however**.

```ruby
class Person
  attr_accessor :name
  def initialize(name)
    @name = name
  end

  def self.say_something
    puts "I am a class method defined on the #{self} class."
  end
end

Person.say_something # => self will be Person class
# self in ruby is the receiver of a method

andy = Person.new('andy')
andy.name # => self will be the instance
# andy (instance) is receiving the method call
```

- `self` in Ruby will always be the receiver of a method call; whatever appears to the left of the `.`

---

### The 4 JS environment rules that govern `this`

-  `this` within a function called with a context (i.e. `Object.method()`) will be the context/object:

```javascript
  const obj = {
    method: function() {
      return this
    }
  }

console.log(obj.method()) // obj
```

-  `this` for a simple function call `fn()` will be the window (browser) or the global object (Node). If we are in strict mode this will be undefined for simple function calls

```javascript
function sayThis() {
  return this
}
sayThis() //window
```

-  `this` within a function called with the keyword `new` in front will point to the newly created object:

```javascript
function Person(name, favColor) {
  this.name = name
  this.favColor = favColor
}

const andy = new Person('andy', 'red')
andy //Person { name: 'andy', favColor: 'red' }
typeof andy // "object"
```

- `this` within a function called with `apply/call/bind` will be the object passed as the first parameter:

```javascript
const personOne = { name: 'andy' }
const personTwo = { name: 'jon' }
const personThree = { name: 'garry' }

function sayName(location, time) {
  return `${this.name} says hello from ${location} at ${time}!`
}

// call will invoke AND bind the function; args to the function must be comma separated

console.log(sayName.call(personOne, 'Morocco', '3:00PM'))
// andy says hello from Morocco at 3:00PM!

// apply will invoke AND bind the function; args to the function must be in an array
console.log(sayName.apply(personTwo, ['New York', '5:00PM']))
// jon says hello from New York at 5:00PM!

// bind will set the value of this but DOES NOT INVOKE THE FUNCTION
const boundPersonThree = sayName.bind(personThree)
console.log(boundPersonThree('Los Angeles', '1:00PM'))
//garry says hello from Los Angeles at 1:00PM!

console.log(sayName())
//browser window says hello from undefined at undefined!
```

- Arrow functions will maintain their lexical scope when evaluating `this`. In other words, `this` will be **whatever it was at the time of definition, not execution**. Unlike functions declared with the `function` keyword, arrow functions are much more predictable because `this` will not be dependent upon execution context:

```javascript
const thisArrow = {
  sayThis: () => {
    return this
  }
}
thisArrow.sayThis() //window

const sampleArrow = () => this
sampleArrow() //window

const boundArrow = sampleArrow.bind(personOne)
boundArrow() //window
// arrow functions resolve `this` at the moment of definition, NOT execution
```

- "Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming." - [MDN Article on the `function` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#No_separate_this)

---

## External Resources

- [MDN `this` article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MPJ JS This Keyword](https://www.youtube.com/watch?v=GhbhD1HR5vk)
- [MDN Arrow Function Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN On Why Arrow Functions Help Us leverage `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#No_separate_this)
