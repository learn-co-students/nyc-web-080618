// Find reference to container
const container = document.getElementById('container')
console.log(container)

// Create a header
const header = document.createElement('H1')
console.log(header)
header.innerText = 'flatStaGram'

// Add header to container
container.appendChild(header)

// I will think about this later
dankMemes.forEach(function(imgSrc) {
  // Create an img element
  const img = document.createElement('img')

  // Update img src attribute
  img.src = imgSrc
  //debugger

  // Append img element to container
  container.appendChild(img)
  console.log(imgSrc)
})
