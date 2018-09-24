function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}

console.log('Starting the sleep function')
sleep(10)
console.log('Wow that sleep function took forever to run. 1 Star 🌟')

// send an HTTP GET request to some URL
fetch("https://dog.ceo/api/breeds/image/random")
// fetch returns a PROMISE object

// send a GET request to a URL
fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => response.json()) //when that request finishes, parse the JSON from the response
.then((JSON) => console.log(JSON)) //once parsing has completed, console.log the data



fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
.then((response) => response.json()).then(console.log)


try {
  console.log(isThisAVariable)
} catch (e) {
  console.warn(e)
}

// catching fetch errors

fetch('http://ron-swanson-quotes.herokuapp.com')
.then((response) => response.json())
.then(JSONResponse => console.log('OUR REQUEST WORKED!', JSONResponse)) //.then will not run if we have an error; we will skip to the .catch
.catch(() => console.warn('SOMETHING BROKE'))


// appending to the DOM
const ronPTag = document.createElement('p')

fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
.then((response) => response.json())
.then((quote) => {
  ronPTag.innerText = quote[0]
  document.body.appendChild(ronPTag)
})



// any value returned by a callback inside a .then will be passed to the next function (.then or .catch) in your promise chain
fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
.then(function(response) {
	return response.json() //return this value so my next .then has access to it
})
.then(function(quoteData) {
	console.log(quoteData)
})

fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
.then((response) => {
	return response.json()
})
.then((quoteData) => {
	console.log('PREVIOUS PROMISE VAL: ', quoteData)
})

// if we forget to RETURN from one promise, the next .then in our chain will not have access to the value:

fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
.then((response) => {
	response.json() //we forgot to return
})
.then((quoteData) => {
	console.log('PREVIOUS PROMISE VAL: ', quoteData) //PREVIOUS PROMISE VAL: undefined
})

// if i wanted to build my own .then
function ourOwnThen(previousPromiseReturnVal, callback) {
  callback(previousPromiseReturnVal)
}
