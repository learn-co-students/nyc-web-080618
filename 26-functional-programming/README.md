# Introduction to Functional programming


- Functional programming is another tool for solving problems. So far, we've been introduced to Object Oriented programming in Ruby. There is another approach called functional programming. Remember that JavaScript allows us to solve problems using both an OO approach and a Functional approach (we'll learn more about OO JavaScript later).

  - The key difference between the two paradigms is that Object-Oriented programming focuses on **what** our objects are. Perhaps we have an `Animal` class and a `Dog` class that inherits from `Animal`. Our classes our concerned with shared functionality and shared state (more on that later)
  - Functional programming on the other hand is primarily concerned with **the behavior of our app** what should this app do, what is the functionality we need. Instead of creating classes with shared state and functionality, we might instead rely on a series of functions that can be _composed_ together to solve a particular problem.

---

### Functions As First Class Objects

- Recall that functions are first class objects in JavaScript:
  - "A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable." [MDN Article on First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
  - Functions can be assigned to variables:

```javascript
const eatDoughnut = function() {
  console.log('I love to eat doughnuts!')
}
```

- Functions can be passed to other functions as arguments:

```javascript
const logCallback = function(callbackFn) {
  console.log(callbackFn())
}
```

- Functions can also return other functions (these are referred to as higher order functions):

```javascript
const higherOrderFn = function() {
  const innerVar = 'I am not a global variable'
  return function() {
    console.log(innerVar)
  }
}

higherOrderFn() //returns a function definition

higherOrderFn()() // 'I am not a global variable'
```

- Notice the `()()` in the example above. Invoking `higherOrderFn` returns a function. In order to execute the return value of `higherOrderFn` I have to use `()` again.

---

### Arrow Functions

- Arrow functions were introduced by [ES6/ ES2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla). They provide a new syntax for declaring functions.

- Instead of using the `function` keyword, [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) can be declared with a new syntax:

```javascript
const arrowFn = () => {
  return 'I am an arrow function!'
}

arrowFn() //'I am an arrow function!'
```

- Notice that arrow functions expect a block `{}` to follow the `=>`
- If a block `{}` follows the `=>`, we will need to **explicitly return** from the function:

```javascript
const forgotToReturn = () => {
  'Whoops! Forgot to return'
}

forgotToReturn() //undefined
```

- However, if we omit the block `{}`, **and the body of the function contains a single expression** arrow functions will _implicitly return_:

```javascript
const implicitReturn = () => 'I am returned!'

implicitReturn() //'I am returned!'
```

- If the body of the function cannot be evaluated as a single expression, an implicit return will not work:

```javascript
const cannotReturn = () => (
  console.log('one expression')
  return 'another expression'
)
// Uncaught SyntaxError: Unexpected token return
```

- Multiline arrow functions require a block `{}`:

```javascript
const multiLineArrow = () => {
  console.log('one statement')
  return 'another expression'
}
```

- `this` inside of an arrow function will also differ from a function declared with the `function` keyword. More on that later.

---

### IIFE (Immediately Invoked Function Expressions):

- Functions in JavaScript can also be invoked as soon as they're defined. Note that I will not be able to reference my function:

```javascript
(function myIIFE() {
  console.log('immediately invoked!')
})() //'immediately invoked!'

//myIIFE //Uncaught ReferenceError: myIIFE is not defined
```

- This allows me to immediately execute my function once and then lose reference too it. It's a one and done function.

---

### Functional Programming Principles

- "**Functional programming** (often abbreviated FP) is the process of building software by composing **pure functions**, avoiding **shared state**, **mutable data**, and **side-effects**." - [Master the JS Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

---

#### Pure Functions

- **Pure Functions** should:
  - Return a value
  - Have no side effects
  - Given the same input, return the same output:

```javascript
const instructorNames = [
  'andrew',
  'evans',
  'mike',
  'jason',
  'jon',
  'garry',
  'vicky',
  'elbin',
  'dick',
  'laura',
  'brooke'
]

const capitalizeNames = (namesArray) => {
  const capitalized = []

  for (let i = 0; i < namesArray.length; i++) {
    capitalized.push(namesArray[i].toUpperCase())
  }

  return capitalized
}
```

- The function above is pure because it returns a **copy** instead of mutating the argument passed in. Given the same input, it will always return the same output.
  - If we use the ES6 [`map` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), which is also a pure function:

```javascript
const instructorNames = [
  'andrew',
  'evans',
  'mike',
  'jason',
  'jon',
  'garry',
  'vicky',
  'elbin',
  'dick',
  'laura',
  'brooke'
]

instructorNames.map((name) => name.toUpperCase())
// the original array remains unchanged
```

- Think of pure functions like black boxes that perform the same predictable operation whenever they are used

---

#### Avoiding Shared State

- "**Shared state** is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A shared scope can include global scope or closure scopes. Often, in object oriented programming, objects are shared between scopes by adding properties to other objects." - [Master the JS Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

- In essence, this means we should rely on **immutable data structures** and pure functions. This is very different from Object Oriented programming which relies heavily on shared state. Think of `attr_accessors` in Ruby. The purpose of these methods is to edit and read the _same piece of data_:

```ruby
class Person

  attr_accessor :name

  def initialize(name)
    @name = name
  end
end
```
---

#### Mutable Data

- "An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created." - [Master the JS Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

```javascript
const nums = [1, 2, 3]

const destructivelyMutate = (numArr) => {
  for (let i = 0; i < numArr.length; i++) {
    numArr[i]++
  }
  return numArr
}
```

- The above example violates this principle. We should instead return a _copy_ of the transformed array using `.map`:

```javascript

const nums = [1, 2, 3]

nums.map((n) => n++)
```

- `Array.prototype.map` will return a _copy_ of the array on which it is called, thereby avoiding mutating state.

---

### Composition

- We can use _higher order functions_ to compose other functions:

```javascript
function multiplyByN(numToMult) {
  return function(num) {
    return numToMult * num
  }
}

const multiplyByTwo = multiplyByN(2)
multiplyByTwo(5) //10

const multiplyByFive = multiplyByN(5)
multiplyByFive(5) //25

const multiplyByTen = multiplyByN(10)
multiplyByTen(5) //50

```

- The snippet above uses the `function` keyword simply to improve readability. The same thing could have been done with an arrow function.

---

### External Resources

- [MDN Article on First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [MDN Reference on New JS Featured Introduced by ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
- [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Master the JS Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
