/****************Lexical Scoping************************/

var name = 'jon'

function sayName() {
  console.log(name)
}

// sayName() // 'jon'

function whatWillNameBe() {
  var name = 'dartnion'
  console.log(name)
}

whatWillNameBe()

function nestedWhatWillNameBe() {
  var name = 'scarry garry'
  return function nestedName() {
    console.log(name)
  }
}

console.log(nestedWhatWillNameBe()) //nestedName

nestedWhatWillNameBe()()

/*******************************************************/


/*******************JS Scopes***************************/
// global

var peach = 'a peach'

function sayHi() {
  console.log('hi')
}

function accidentallyGlobal() {
  xRay = 'i can see ur skeleton'
  // without var, let, const vars will be global
}

accidentallyGlobal() //need to invoke accidentallyGlobal in order to set the xRay var
console.log(xRay) // 'i can see ur skeleton'


// function

function petShop() {
  var shopName = 'do not get hit by a train'
}

petShop()
// console.log(shopName) //shopName is not defined



// block (w/ var kw exception)



{
  let x = 'pls dont name your variables x'
}

// console.log(x) // x is not defined

/*******************************************************/

/************** Var Let Const *********************/

// var can be assigned and redeclared as many times as i want; this could prove BUGGY
var bakery = 'bake shop'

bakery = 'another bakery'

var bakery = [1, 2, 3]

bakery = function() {
  return 'some other unexpected thing'
}

globalVar = 'i am global'
globalVar = 'global!'


//let

let artist = 'beyonce' //declaring and assigning a variable

artist = 'picasso' //reassigning an already existing variable to a different value


// let artist = 'roy woods' //artist has already been declared

console.log(artist)


function nestedArtist() {
  let artist = 'roy woods'
}

nestedArtist()


// const
const dog = 'winfield'

// dog = 'charlotte' error: cannot reassign constant

// const dog = 'meg' // dog has already been declared


///////////////////////////////////

function addFiveToN(num) {
  return 5 + num
}

function addFiveToN() {
  return 5
}

function addFiveToN() {
  console.warn('D A N G E R')
}


const subtractFiveFromN = function(num) {
  return num - 5
}

function nestedSubtract() {
  const subtractFiveFromN = function(num) {
    return num - 5
  }
}

nestedSubtract()

// function subtractFiveFromN() {
//   console.log('lol')
// } //cannot redeclare subtractFiveFromN

// subtractFiveFromN = 'NUMBER' // cannot reassign a constant



/////////////****** HOISTING *******////////////

console.log(pizza)
var pizza = 'stuffed crust from pizza hut'

var donut;
console.log(donut)
donut = 'jelly'
console.log(donut)


var donut = 'jelly'

console.log(hoistedFn())

function hoistedFn() {
  return 'I AM HOISTED'
}

// willThisHoist() //willThisHoist is not defined

const willThisHoist = function() {
  return '🤔'
}


//****** First Class Functions ******************//

function alertReturnVal(callbackFn) {
  window.alert(callbackFn())
}

function iYamConfused() {
  return '🤔'
}

alertReturnVal(iYamConfused)

const myForEach = function(array, callbackFn) {
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i]
    callbackFn(currentItem)
  }
}

myForEach([1, 2, 3], console.log)



function multiplyByN(numToMult) {
  return function innerMultiplier(num) {
    return numToMult * num
  }
}

console.log(multiplyByN(5)) // innerMultiplier

const multiplyByFive = multiplyByN(5)
const multiplyByTen = multiplyByN(10)
const double = multiplyByN(2)

console.log(multiplyByFive) // innerMultiplier

console.log(multiplyByFive(5)) // 25
