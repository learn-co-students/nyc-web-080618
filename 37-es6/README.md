# Helpful ES6 Syntax to Know for React ⚛️

![](https://media.giphy.com/media/13twUEuUnCrEju/giphy.gif)

---

## The Following are Used heavily in Mod 4 for React:
- destructuring

```javascript
const voltron = {
  robot1: 'a robot',
  robot2: 'another robot',
  robot3: 'yet another robot'
}
/* from the object voltron,
please pull out the VALUES stored at
robot1 and robot2 */
const { robot1, robot2} = voltron

class Person {
  constructor({ name, favColor }) {
    this.name = name
    this.favColor = favColor
  }
}
//VS
class Person {
  constructor(props) {
    this.name = props.name
    this.favColor = props.favColor
  }
}

```

- key value assignment shortcut

```javascript
const pizza = 'pepperoni'
const restaurant = 'sbarros authentic New York Pizza™️'

const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}

const pizzaObj2 = { pizza, restaurant }
```

- spreading

- `slice()` or `Object.assign()`

```javascript
const trebuchet = { range: 300, ammo: 'rocks' }

function updateCat() {
  // return a COPY of the trebuchet object
	return {...trebuchet, range: 500}
}

function updateCat(newRange) {
	return Object.assign({}, trebuchet, {range: 500})
}

const names = ['andrew', 'garry', 'jon', 'evans']

// return COPY of names with 'jason' added
[...names, 'jason']
// copy of the array
["andrew", "garry", "jon", "evans", "jason"]

// removing elements:
names.slice(0, 1) // ['andrew']

names.filter(n => n !== 'andrew')
// ["garry", "jon", "evans"]


```
- all the forms of arrow functions

```javascript
// implicit return
const sayHi = () => 'HELLOOO'

// has a block {}, needs explicit return
const sayBye = () => {
  return 'BYEEE'
}
```
- function binding vs arrow functions

```javascript
const Dog = {
  name: 'winfield',
  favSnacks: ['cheese', 'peanut butter', 'carrots'],
  sayName: function() {
    return this.name
  },
  barkName: () => {
    return this.name + 'BARK!'
  },
  sayFavFoods: function() {
    // this is Dog
    this.favSnacks.forEach(s => {
      console.log(`${this.name} likes ${s}`)
    })
  }
}
// this will be Dog
Dog.sayName() //'winfield'
// this will be the window
Dog.barkName() //'undefined BARK!'
Dog.sayFavFoods()
```
- class instance properties and class syntax in general

```javascript
class Donut {
  constructor(name, toppings) {
    this.name = name
    this.toppings = toppings
  }
}

const glazed = new Donut('glazed', 'glaze')

const sprinkles = new Donut('sprinkle', 'sprinkles')

```

- passing functions around as arguments

```javascript
function printRed(string) {
  console.log(`%c ${string}`, 'color: red')
}

function printGreen(string, idx, arr) {
  console.log(`%c ${string} ${idx} ${arr}`, 'color: green')
}

['chocolate', 'fried chicken', 'mac and cheese'].forEach(printRed)

Array.prototype.myForEach = function(callback) {
  // this will be the array we called the method on
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
```
- dynamic object keys

```javascript
function dynamicKeyCreate(obj, key, val) {
  obj[key] = val
  return obj
}
```
  - This is only for one trick we use in React forms.

### External Resources

- [Modern JavaScript](http://www.reactnativeexpress.com/modern_javascript)
- [Wes Bos Simple Guide for Undertanding Destructuring in JS](https://wesbos.com/destructuring-objects/)
- [MDN Article on ES6 Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Article on forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
