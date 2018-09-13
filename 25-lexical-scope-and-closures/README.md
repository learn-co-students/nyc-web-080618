# Scope and closures

![](https://media.giphy.com/media/sOGgevbtBDYKQ/giphy.gif)

## Objectives

### Variables scope

- Variable scope in Ruby:

```ruby
name = 'andrew'

def say_name
  puts name
end

say_name # what will happen 🤔

undefined local variable or method `name` for main:Object (NameError)
```

- However, if we make the variable global, or pass it in as an argument the code above will work:

```ruby
# WORKS!
$name = 'andrew' #global vars in ruby are declared w/ $

def say_name
  puts $name
end

say_name # what will happen 🤔
#=> 'andrew'
```

```ruby
# WORKS!
name = 'andrew'

def say_name(name_arg)
  puts name_arg
end

say_name(name) # what will happen 🤔
#=> 'andrew'
```

---

- Each scope is like its own 'bucket' in JavaScript––our variables live within a space and can reach out to an outer scope:

```javascript
var name = 'jon'

function sayName() {
  console.log(name)
}

sayName() // 'jon'
```

- Within the function `sayName`, there is no variable called `name`. However, this variable is declared _outside_ the function. `sayName` will still have access to variables outside its own scope. We can think of scope as being one way; a function can reach outside it's local scope, but not the other way around:

```javascript
function sayName() {
  var name = 'garry'
  console.log(name)
}

sayName() // 'garry'

console.log(name) // name is not defined; name is scoped within the sayName fn
```

- Furthermore, JavaScript will look at (resolve) the most local scope before looking up:

```javascript
var name = 'andrew' //global var

function sayName() {
  var name = 'garry' // local to sayName
  console.log(name)
}

sayName() // 'garry'
```

- Because the `name` variable is declared within `sayName`, the output of the function will be 'garry'.

---

### JS Scopes: `Global`, `Function`, `Block`:

- There are three main types of scopes in JS:
  - `Global`: a variable declared in the global scope; outside a function, outside a block, outside an object. These variables are _globally accessible_ meaning they can be read _anywhere_ in your code.

```javascript
var name = 'my global name'
```

- `Function` scope: variables are confined to the functions in which they were declared. These variables are _not accessible_ in the global scope. They can only be accessed within the function or any scope that is 'lower' on the scope chain, or more local (more on that later)

```javascript
function fnScope() {
  var name = 'a local name'
}
```

- `Block` scope: much like a function, variables defined within a block are only accessible within that block or in more local scopes [unless you use the `var` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block):

```javascript
{
  let blockVar = 'local to this block'
}
console.log(blockVar) //Uncaught ReferenceError: blockVar is not defined

```

  - Important side note about the code above: depending on the context, `{}` (curlyboys™️) can be a function body, block, or an object literal `{ pizza: 'hut', key: 'value' }`

  ---

### JS Variables–– `var`, `let`, `const`

- In JavaScript, there are three keywords we can use to declare variables: `var`, `let`, and `const`. (We can also omit the keyword, which will make a variable **global**):

```javascript
function forgotVar() {
  donutFlavor = 'glazed' //without var/let/const, donutFlavor will be GLOBAL
}

console.log(donutFlavor) // glazed
```

- Variables declared with `var` can be reassigned and **declared** as many times as we'd like (they will also be hoisted, but we'll discuss that later):

```javascript
var donutFlavor = 'jelly' //declares var

donutFlavor = 'sprinkles' //reassigns var

var donutFlavor = 'chocolate' //redeclares var

console.log(donutFlavor) // 'chocolate'
```

- Variables declared with `let` can be **reassigned** as many times as we'd like but cannot be **redeclared**:

```javascript
let animal = 'dog' //declare animal variable

animal = 'ferret' //reassign animal to another value

let animal = 'giraffe' //attempt to redeclare animal
// Uncaught SyntaxError: Identifier 'animal' has already been declared
```

- Variables declared with `const` can neither be reassigned nor redeclared, they are **constants**:

```javascript
const person = 'carl' //declare and assign a new variable

person = 'Carl' //Uncaught TypeError: Assignment to constant variable.

const person = 'CARL' //Uncaught SyntaxError: Identifier 'carl' has already been declared

```

### Hoisting

- While JavaScript is being compiled, memory is allocated to certain values prior to assignment. In other words, JavaScript will allocate memory to functions declared with the `function` keyword and with the `var` keyword will be declared (allocated memory) before your code is executed:

```javascript
bark() // 'woof'

function bark() {
  console.log('woof')
}
```

- Notice that we are able to invoke the `bark` function before it is declared. This is because javascript will allocate memory to this function prior to executing the code in the file. Contrast this with ruby:

```ruby
not_hoisted #attempt to invoke the method before it is declared

def not_hoisted
  puts "Will this method execute 🤔"
end


#=>  undefined local variable or method `not_hoisted` for main:Object (NameError)
```

- Let's see how javascript handles variable hoisting:

```javascript
console.log(dog)

var dog = 'penny' //undefined

```

- From the [MDN Article on Hosting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting): JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined.

- We can _**imagine**_ that javascript is 'hoisting' or 'lifting' our variables up, even though this is not what is technically happening:

```javascript
var dog; //declare dog but do not assign it (value will be undefined)

console.log(dog) // undefined

dog = 'penny' //assign a value to dog
```

- While it may be helpful to imagine that the above is happening, javascript does not actually move variables around in your code.

- From the [MDN Article on Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting): Conceptually, for example, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

- However, if you declare the variable after it is used, but initialize it beforehand, it will return the value:

```javascript
num = 6
console.log(num) // 6
var num
```

- Notice that we are **assigning** the variable _then_ using it. By the time our `console.log` is executed, `num` will have been assigned.

- This is no the case for variables declared with `let` and `const`, however:

```javascript
console.log(bears)//Uncaught ReferenceError: bears is not defined

let bears = 'big and scary and dangerous'
```

```javascript
console.log(donut) //Uncaught ReferenceError: donut is not defined

const donut = 'maple bacon'
```

- Variable scope rules are _mostly_ unchanged for `let` and `const`:

```javascript
let fruit = 'banana'
function snack() {
  console.log(fruit)
}

snack() //banana
```

```javascript
let pizza = 'outer pizza is global pizza'
function eatPizza() {
  let pizza = 'inner pizza is pizza hut stuffed crust™️'
  console.log(pizza)
}

eatPizza() //inner pizza is pizza hut stuffed crust™️
```

### Closures

- From the [MDN Article on First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function): A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

  - Assigning functions to variables:

```javascript
var eatFood = function(food) {
  console.log(`Eating ${food}`)
}

eatFood('pizza') //Eating pizza
eatFood('donuts') //Eating donuts
eatFood('salad') //Eating salad
```

- Also note that functions declared with the `function` keyword and/or with `var` can be reassigned and redeclared at any time:

```javascript
function sayHi() {
  console.log('Hello!!!!')
}

function sayHi() {
  console.log('Goodbye!')
}

var sayHi = function() {
  console.log('Something totally unexpected is being returned by this function')
}

sayHi() //Something totally unexpected is being returned by this function
```

- Be cautious of this as you may accidentally reassign a function. Instead, we can rely on the `const` keyword to declare functions:

```javascript
const worksAsExpected = function() {
  console.log('An expected response!')
}

worksAsExpected() //'An expected response!'

function worksAsExpected() {
  console.log('UH OH SPAGHETTI-O')
} //Uncaught SyntaxError: Identifier 'worksAsExpected' has already been declared

const worksAsExpected = function() {
  console.log('ALSO NOT MY ORIGINAL FUNCTION')
} //Uncaught SyntaxError: Identifier 'worksAsExpected' has already been declared

worksAsExpected = function() {
  console.log('lol whoops')
} //Uncaught TypeError: Assignment to constant variable.

```

- First class functions
- Functions that return functions (like any other value)
- Closures as the natural outcome of first class functions and Lexical scope
- Debugger and closures

---

**First class functions**:

- A programming language is said to have First-class functions when functions in that language are treated like any
  other variable. For example, in such a language, a function can be passed as an argument to other functions, can be
  returned by another function and can be assigned as a value to a variable.
  [From MDN](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

---

**Lexical scope**:

- Lexical scope means that scope is defined by author-time decisions of where functions are declared.
  [From You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

---

**Closure**:

- A closure is the combination of a function and the lexical environment within which that function was declared.
  [From MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

- Definition from
  [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/31e1d4ff600d88cc2ce243903ab8a3a9d15cce15/scope%20%26%20closures/ch5.md):
  Closure is when a function is able to remember and access its lexical scope even when that function is executing
  outside its lexical scope.

---

### External Resources

- [MDN Article on Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MDN Article on Block Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
- [MDN Article on Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN Article on First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [MPJ Video on Closures](https://www.youtube.com/watch?v=CQqwU2Ixu-U)
- [Temporal Dead Zone](https://wesbos.com/temporal-dead-zone/)
- [You Don't Know JS Scope and Closures](https://github.com/getify/You-Dont-Know-JS/tree/31e1d4ff600d88cc2ce243903ab8a3a9d15cce15/scope%20%26%20closures)
- [Air BnB JS StyleGuide](https://github.com/airbnb/javascript)


![curly bois](https://i.imgur.com/ZwfLpVW.jpg)
