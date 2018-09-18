// Functions as first class Objects:

const eatDoughnut = function(donutFlavor) {
  return `I am eating a ${donutFlavor} donut`
}

console.log(eatDoughnut('glazed')) // 'i am eating a glazed donut'

const higherOrderFn = function(callback) {
  console.log(callback())
}

higherOrderFn(eatDoughnut) // I am eating a undefined donut

const closureFn = function() {
  return function() {
    console.log('I am a function within a function')
  }
}

console.log(closureFn()) //function

closureFn()() // I am a function within a function


// ES6 Arrow Functions

const eatCereal = (cereal) => {
  console.log(`I love 2 eat ${cereal}`)
}

eatCereal('cocoa puffs') //I love 2 eat cocoa puffs

const implicitReturn = () => 'dolphins r amazing wow so smart'
console.log(implicitReturn()) //'dolphins r amazing wow so smart'

const multiLineArrow = (num1, num2) => {
  const total = num1 + num2
  return total
}

const fixedMultiLine = (num1, num2) => (num1 + num2)

console.log(fixedMultiLine(10, 10)) //20


console.log(multiLineArrow(5, 5)) //10

// IIFEs
const result = (function () {
    return 'when i say flat, you say iron school!'
})()

const iifeName = (() => 'NOICE')()


// ES6 enumerator functions

// pure function:
const arr = [1, 2, 3, 4, 5, 6]
const mappedArr = arr.map(function(num) {
  return num += 10
})

const arrowMap = arr.map((num) => num += 10)

console.log(mappedArr) //[11, 12, 13, 14, 15, 16]
console.log(arrowMap) //[11, 12, 13, 14, 15, 16]
console.log(arr) //[1, 2, 3, 4, 5, 6]

function impureMap(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i])
  }
}

// same as below
// function impureCallback(num) {
//   return num = 'hotdog'
// }

const impureCallback = /*FUNCTION*/ (num) => /*RETURN*/ num = 'hotdog'

impureMap(arr, impureCallback)
console.log(arr)// ['hotdog', 'hotdog', 'hotdog', 'hotdog', 'hotdog', 'hotdog']

// composition
const names = ['andy', 'jon', 'garry']
const turnIntoChocolate = names.map((name) => 'chocolate bar')

console.log(turnIntoChocolate) //['chocolate bar', 'chocolate bar', 'chocolate bar']
console.log(names)// ['andy', 'jon', 'garry']
