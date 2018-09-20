// prevent us from grabbing HTML elements before they have rendered
document.addEventListener('DOMContentLoaded', findFormListenForAppend)



function findFormListenForAppend() {
  // form the user will submit from
  const commentForm = document.getElementById('comment-form')
  console.log(commentForm)
  // div we want to add comments to
  const commentsContainer = document.getElementById('commentsContainer')
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() //STOP form from sending POST request
    // event.target is the form; what is our eventListener attached to?
    const userInput = event.target.querySelector('#new-input').value
    // make a new paragraph tag
    const pTag = document.createElement('p')
    // // add the user's comment to that paragraph tag
    pTag.innerText = userInput
    // // append this new paragraph tag to the page
    commentsContainer.appendChild(pTag)

    // commentsContainer.innerHTML += `<p>${userInput}</p>`
    event.target.reset()
  })
}
