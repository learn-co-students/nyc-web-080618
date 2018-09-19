/************ Function called on an Object ***************/
const myObj = {
  method: function() {
    return this
  }
}

console.log(myObj.method())//myObj

const objMethod = myObj.method //assign another pointer to myObj.method

console.log(objMethod === myObj.method) //true

console.log(objMethod()) //global/window object

const dog = {
  name: 'winfield',
  bark: function() {
    return `${this.name} is barking! Woof woof woof!`
  }
}

console.log(dog.bark()) //winfield is barking! Woof woof woof!

const windowBark = dog.bark //create another pointer to dog.bark

console.log(windowBark()) //undefined is barking! Woof woof woof!

const dog2 = Object.assign({}, dog) //object.assign creates a copy of my dog
dog.name = 'nah'

dog2.name = 'buddy'
console.log(dog2.bark()) //buddy is barking! Woof woof woof!
console.log(dog.bark()) // nah is barking! Woof woof woof!

console.log(dog2 === dog) //false; dog2 points to a COPY of dog


const fancyPizza = {
  type: 'super deluxe',
  bake: function() {
    console.log('%c THIS IN OUTER BAKE FN', 'color: purple', this)
    return function() {
      console.log('%c THIS IN INNER BAKE FN', 'color: red', this)
      return `${this.type} is being cooked`
    }
  }
}

fancyPizza.bake()()// undefined is being cooked

/********************************************************/

/************ Simple Function Call ***********************/

function wutIsThis() {
  return this
}

wutIsThis() //window
/********************************************************/

/************ Function Called with New Keyword ***********/

function dogConstructor(name, age, favoriteToy) {
  this.name = name
  this.age = age
  this.favoriteToy = favoriteToy
}

// constructor functions return OBJECTS {}

const winfield = new dogConstructor('name', 4, 'squeaky toy')
winfield //{name: "name", age: 4, favoriteToy: "squeaky toy"}

/********************************************************/

/************ Bind Call Apply ****************************/
const donutShop = {
  shopName: 'krispy kreme',
  buyDonut: function(donut) {
    return `Thank you for shopping at ${this.shopName}, and buying ${donut}`
  }
}
donutShop.buyDonut('original glazed')
//"Thank you for shopping at krispy kreme, and buying original glazed"

donutShop.buyDonut.apply({ shopName: 'donut plant' }, ['original glazed', 'another arg'])
// "Thank you for shopping at donut plant, and buying original glazed"


const inceptionObj = {
  wut: 'THE INCEPTION OBJ',
  whatIsThis: function() {
    console.log('%c ONE LEVEL NESTED', 'color: red', this)
    return function() {
      console.log('%c TWO LEVELS NESTED', 'color: green', this)
      return function() {
        console.log('%c THREE LEVELS NESTED', 'color: blue', this)
      }.bind(this) //fix `this` to the `this` from the enclosing scope
    }.bind(this) //fix `this` to the `this` from the enclosing scope, which is inceptionObj
  }
}

const anotherPointerToWhatIsThis = inceptionObj.whatIsThis //create another pointer to inceptionObj.whatIsThis

console.log(anotherPointerToWhatIsThis === inceptionObj.whatIsThis) //both variables point to the same function in memory

anotherPointerToWhatIsThis() //window object


/********************************************************/

/************ Arrow Functions ****************************/
const mammal = {
  name: 'dolphin',
  favoriteSnacks: ['krill', 'tuna', 'tiny fish, assorted', 'chicken of the sea'],
  // eatSnacks: function() {
  //   return this.favoriteSnacks.map(function(snack) {
  //     return `${this.name} likes to eat ${snack}\n`
  //   }.bind(this))
  // }
  eatSnacks: function() {
    // arrow fn will find `this` in scope, which is mammal
    return this.favoriteSnacks.map((snack) => {
      // arrow fn will ask: is there a `this` in my current scope?
      return `${this.name} likes to eat ${snack}\n`
    })
  }
}

mammal.eatSnacks() //["dolphin likes to eat krill↵", "dolphin likes to eat tuna↵", "dolphin likes to eat tiny fish, assorted↵", "dolphin likes to eat chicken of the sea↵"]



/********************************************************/
