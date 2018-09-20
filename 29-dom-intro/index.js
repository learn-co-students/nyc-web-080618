console.log('%c Hello, World!', 'color: orange')
const outerNode = document.getElementById('outer-node')

// const container = document.querySelector('#container')
const container = document.getElementById('container')
// // make a new image tag
// const img = document.createElement('img')
// // set the src attribute
// img.src = dankMemes[0]
// // append that to the DOM
// container.appendChild(img)


// append multiple images to the page:

// dankMemes.forEach(/*function*/(meme) => {
//   const img = document.createElement('img')
//   img.src = meme
//   container.appendChild(img)
// })

// i want an array of strings of HTML img tags
const stringifiedImages = dankMemes.map(/*function*/(imgUrl) => `<img src="${imgUrl}">`)

outerNode.innerHTML = stringifiedImages.join('')
