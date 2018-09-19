// object literals

const puppy1 = { name: 'winfield', favSnack: 'peanut butter' }
const puppy2 = { name: 'penny', favSnack: 'chicken' }
const puppy3 = { name: 'baxter', favSnack: 'carrots' }


function bark(dog) {
  return `${dog.name} is barking`
}

console.log(bark(puppy1))//winfield is barking
console.log(bark(puppy2))//penny is barking
console.log(bark(puppy3))//baxter is barking

// factory function

function puppyFactory(nameParam, favSnackParam) {
  return {
    name: nameParam,
    favSnack: favSnackParam,
    bark: function() {
      return `${this.name} is barking!`
    }
  }
}


const winfield = puppyFactory('winfield', 'peanut butter')
const charlotte = puppyFactory('charlotte', 'used napkins')
console.log(winfield)// { name: 'winfield', favSnack: 'peanut butter', bark: fn }
console.log(charlotte)// { name: 'charlotte', favSnack: 'used napkins', bark: fn }

console.log(winfield.bark())//winfield is barking!
console.log(charlotte.bark())//charlotte is barking!


console.log(winfield.bark === charlotte.bark)//false

//////////////////////////////
// Object.create w/ dog template

const dogTemplate = {
  name: null,
  favSnack: null,
  bark: function() {
    return `${this.name} is barking!`
  }
}

const winfield2 = Object.create(dogTemplate)
winfield2.name = 'winfield'
winfield2.favSnack = 'peanut butter'

const charlotte2 = Object.create(dogTemplate)
charlotte2.name = 'charlotte'
charlotte2.favSnack = 'carrots'

console.log(winfield2.bark())//winfield is barking!
console.log(charlotte2.bark())// charlotte is barking!

console.log(winfield2.bark === charlotte2.bark)//true

///////////////////////////////////////////////////////////////////////////////////
// constuctor function

function DogFactory(nameParam, favSnackParam) {
  // will return { name: 'winfield', favSnack: 'peanut butter'}
  // this will be the newly created object
  // `new` keyword will add DogFactory to the chain of ancestors for our newly created obj
  this.name = nameParam
  this.favSnack = favSnackParam
}

DogFactory.prototype.bark = function() {
  //this method is available to all "instnaces of dog"
  return `${this.name} is barking`
}

const constructorWinfield = new DogFactory('winfield', 'peanut butter')
const constructorCharlotte = new DogFactory('charlotte', 'chicken')

console.log(constructorWinfield.bark())// winfield is barking
console.log(constructorCharlotte.bark())//charlotte is barking
//////////////////////////////////////////////////////////////////////////////////////

class Dog {
  constructor(nameParam, favSnackParam) {
    // will return { name: 'winfield', favSnack: 'peanut butter'}
    // this will be the newly created object
    this.name = nameParam
    this.favSnack = favSnackParam
  }

  bark() {
    return `${this.name} is barking!`
  }
}

const winfieldClassInstance = new Dog('winfield', 'peanut butter')
const charloteClassInstance = new Dog('charlotte', 'dolphin 😱')

console.log(charloteClassInstance.bark === winfieldClassInstance.bark) //true

const pizza = 'if u live in new york you should not be eating pizza hut'

const CarClass = (() => {
  const pizza = 'pizza hut stuffed crust is kinda gross but really amazing'
  let id = 1
  return class Car {
    constructor(make, model) {
      this.make = make
      this.model = model
      this.id = id++
    }

    explode() {
      console.log('%c INSIDE CLOSURE', 'color: purple', pizza)
      return 'uh oh! BOOOMMMMMM!!!'
    }
  }
})()

CarClass //Car class

honda = new CarClass('honda', 'pilot')
console.log(honda.model) //pilot
