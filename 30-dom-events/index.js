document.addEventListener('DOMContentLoaded', function DOMContentLoadedEventHandler() {
 // grab the container we will append comments to
  const commentsContainer = document.getElementById('commentsContainer')
 // grab the form the user will use to submit comments
  const commentForm = document.getElementById('comment-form')
 // listen for the submit event on the form
  commentForm.addEventListener('submit', function formSubmitEventHandler(event) {
    event.preventDefault() //stop form from POSTING
 // grab the INPUT field from the form
    const userInputField = event.target.querySelector('#new-comment')
 // grab the string the user typed into the form
    const userInputString = userInputField.value
 // create a new paragraph tag
    const commentPTag = document.createElement('p')
  // set the p tag's innerText to the user's comment
    commentPTag.innerText = userInputString
 // append the comment to the dom
    commentsContainer.appendChild(commentPTag)

  })

})
