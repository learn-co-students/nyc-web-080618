let jon = 'jon'

function sayName() {
  let nameTwo = 'joe'
  return nameTwo + jon
}
// console.log(nameTwo) not defined; nameTwo is scoped to the sayName function

console.log(sayName()) // joejon

/*************************************************************/
//  LEXICAL SCOPING
function scope() {
  let nameTwo = 'Murd3rf4ce'
  return function displayName() {
    return nameTwo
  }
}

let scopeInnnerFn = scope()
console.log(scope()) //fn: displayName
console.log(scopeInnnerFn) // fn: displayName
console.log(scopeInnnerFn()) //Murd3rf4ce
console.log(scope()()) //Murd3rf4ce

/******************************************/
function multiplyByN(numOne) {
  return function innerMultiplier(numTwo) {
    return numOne * numTwo
  }
}

console.log(multiplyByN(5)) // fn: innerMultiplier
let multiplyByTen = multiplyByN(10)
console.log(multiplyByTen) // fn: innerMultiplier
console.log(multiplyByTen(99)) // 990 -> 10*99
/*************************************************************/

function whomstIsBrad() {
  let name = 'Brad'
  {
    // let name = 'Bradfort' //declares new var in new scope
    name = 'Bradfort' //reassign var declared above
  }
  return name
}

console.log(whomstIsBrad()) // Bradfort

/*************************************************************/
// from the mozilla docs
// THX MOZILLA 😍
function makeFunc() {
  var name = 'Mozilla'
  return function displayName() {
    return name
  }
}

var myFunc = makeFunc()
console.log(makeFunc()()) //Mozilla
// console.log(myFunc())

/************************************************/

function joseph() {
  let josephsName = 'joseph'
  // return josephsName
  return function sayJosephsName() {
    return josephsName
  }
}

// josephsName this var will not be accessible OUTSIDE of the fn joseph
let josephOuter = joseph()
console.log(josephOuter) // fn: sayJosephsName
console.log(josephOuter()) // joseph
console.log(joseph()()) // joseph

/***********************************************/
var flamingo
console.log(flamingo) // undefined
flamingo = 'flamingo'
console.log(flamingo) // flamingo

console.log(monkey()) // banana

function monkey() {
  return 'banana'
}
/***********************************************/
// console.log(sandwich)
let sandwich = 'hamsalami' //let does not get hoisted like var does

console.log(sandwich) //hamsalami
sandwich = 'tuna'
console.log(sandwich) //tuna
/***********************************************/
// console.log(tacosoup) //tacosoup is not defined
const tacosoup = 'yikes'
console.log(tacosoup) //yikes
// tacosoup = 'gaspacho' // cannot reassign const
/***********************************************/
function sayBanana() {
  console.log('banana')
}

sayBanana() //banana

// in another file

function sayBanana() {
  console.log('HOT SOUP')
}

sayBanana() // HOT SOUP

const myFn = function() {
  return 'this function will not be accidentally overwritten'
}

// function myFn() {} not allowed to redeclare the same fn
/***********************************************/

let debuggerExample = 'wat'
function debuggerIsWeird() {
  console.log(debuggerExample)
  debugger //occasionally you will not have access to variables inside the chrome debugger; if this happens don't worry it's just a chrome issue; adding a console.log to that var will fix
}

[1, 2, 3, 4, 5, 6, 7].forEach(function(num, idx, arr) {
  console.log('NUM IS ', num)
  console.log('IDX IS', idx)
  console.log('ARR IS ', arr)
  debugger
})
