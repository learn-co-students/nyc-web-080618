# Browser Events

## Outline

* Why events?
* What are events and event listeners
* When and why to use event listeners
* Event types
* Event listeners as function references or in-line functions
* Synthesize knowledge of forms with event listeners

---

## What are JavaScript Events

- "In the case of the Web, events are fired inside the _browser window_, and tend to be attached to a specific item that resides in it — this might be a single HTML element, set of HTML elements, the HTML document loaded in the current tab, or the entire browser window. There are a lot of different types of events that can occur, for example:

  - The user clicking the mouse over a certain element or hovering the cursor over a certain element.
  - The user pressing a key on the keyboard.
  - The user resizing or closing the browser window.
  - A web page finishing loading.
  - **A form being submitted.**
  - A video being played, or paused, or finishing play.
  - An error occurring.
- You will gather from this (and from glancing at the [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)) that there are a lot of events that can be responded to.

- Each available event has an **event handler**, which is a block of code (usually a user-defined **JavaScript function**) that will be run when the event fires. When such a block of code is defined to be run in response to an event firing, we say we are **registering an event handler**. Note that event handlers are sometimes called **event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener **listens** out for the event happening, and the handler is the code that is run in response to it happening." - [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).

---
## Listening for Events

- JavaScript allows us to [traverse the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) and find elements. Let's see how we can target a particular element and listen for events:

- Assuming our HTML looks like this:

```html
<div id="comments">
  <h3>Comments</h3>
  <form id='comment-form'>
    <div class="field">
      <input id='new-comment' type='text' placeholder='New Comment' />
      <input type='submit' class='btn' value="Submit" />
    </div>
  </form>
  <div id="commentsContainer">
  </div>
</div>
```

- We can grab the `comment-form` and eventually listen to events:

```javascript
const commentForm = document.getElementById('comment-form')
// OR querySelector
// const commentForm = document.querySelector('#comment-form')
```

- Something to look out for. If we are loading our js files in the `head` tag of our HTML, there is a chance that the JavaScript code we have written will start executing **before our HTML has been loaded and parsed by the browser**. This might cause some element selectors to return `null`. As a precaution, we can listen for the `DOMContentLoaded` event.
  - "The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed" - [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded). Let's add this to our code:

```javascript
document.addEventListener('DOMContentLoaded', function DOMContentLoadedEventHandler() {
  const commentForm = document.getElementById('comment-form')

})
```

- In the snippet above, we are adding an **event listener** to the document and listening for the `DOMContentLoaded` event. When that event is fired, the anonymous function passed to `addEventListener` will be invoked.
  - "`addEventListener()` sets up a function that will be called whenever the specified `event` is delivered to the target. Common targets are HTML `Element`, `Document`, and `Window`" - [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- Now that we're waiting for our DOM content to load, let's listen for a `submit` event on our form:
  - "The `submit` event is fired when a form is submitted.
  - Note that `submit` is fired **only** on the form element, not the button or submit input. (Forms are submitted, not buttons.)" - [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)

```javascript
document.addEventListener('DOMContentLoaded', function DOMContentLoadedEventHandler() {
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function formSubmitEventHandler(event) {
    console.log(event)
  })

})
```

- If we try adding something to the form and clicking submit, we'll see our `console.log` for a second then it will disappear.

![](https://media.giphy.com/media/1L5YuA6wpKkNO/giphy.gif)

- Forms will attempt to make an HTTP `POST` request on **submission**. Recall from Mod2 that our forms would send a `POST` request that was then handled by our controller. If we give our `form` and `action` attribute, it will try to `POST` to that endpoint:

```html
<form id="comment-form" action="/hotdog">
  <div class="field">
    <input id='new-comment' type='text' placeholder='New Comment' />
    <input type='submit' class='btn' value="Submit" />
  </div>
</form>
```

- This form ⬆️ will try to send a `POST` request to `/hotdog`
- If our form **does not have an action attribute** it will attempt to `POST` to the URL we are currently on, making it **appear as though** our page is being refreshed.

---

- Our current JS app is not currently sending data to a backend, so we'll need some way to **prevent** this **default** action of submitting the form 🤔.

- Let's tell our **event handler** to `preventDefault`:

```javascript
document.addEventListener('DOMContentLoaded', function DOMContentLoadedEventHandler() {
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function formSubmitEventHandler(event) {
    event.preventDefault() //stop form from POSTING
    console.log(event.target) //form
  })
})
```

- Some key points about the `event` object that is passed to our `formSubmitEventHandler` function as a parameter:
  - "The Event interface represents any event which takes place in the DOM; some are user-generated (such as mouse or keyboard events), while others are generated by APIs (such as events that indicate an animation has finished running, a video has been paused, and so forth). There are many types of events, some of which use other interfaces based on the main Event interface. Event itself contains the properties and methods which are common to all events." - [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
  - `event.target` refers to the **HTML Element** that dispatched the event. For example, if I tell my app to listen for `click` events and the user clicks on a `p` tag, `event.target` will be the `p` tag. If the user clicks on a `button` the `event.target` will be the button. In our case, the `form` is receiving the `submit` event.

- We need to grab the user's input _from the form_. That information is stored in the `input` tag **inside the form**. If we refer back to our `form` we can see that `input` is a **child** of the `form` itself:

```html
<form id="comment-form" action="/hotdog">
  <div class="field">
    <input id='new-comment' type='text' placeholder='New Comment' />
    <input type='submit' class='btn' value="Submit" />
  </div>
</form>
```

- Since our `event.target` is the `comment-form` itself, we can grab the input using `querySelector`:

```javascript
document.addEventListener('DOMContentLoaded', function DOMContentLoadedEventHandler() {

  const commentForm = document.getElementById('comment-form')

  commentForm.addEventListener('submit', function formSubmitEventHandler(event) {
    event.preventDefault() //stop form from POSTING

    const userInputField = event.target.querySelector('#new-comment')

    const userInputString = userInputField.value
  })

})
```

- `userInputField` will give us the whole `input` element. Since we only care about the user's new comment, we can grab the `value` attribute which will be whatever comment the user typed into the field.

- Let's use that to create a new `p` tag and append it to the DOM:

```javascript
document.addEventListener('DOMContentLoaded', function DOMContentLoadedEventHandler() {

  const commentsContainer = document.getElementById('commentsContainer')

  const commentForm = document.getElementById('comment-form')

  commentForm.addEventListener('submit', function formSubmitEventHandler(event) {
    event.preventDefault() //stop form from POSTING

    const userInputField = event.target.querySelector('#new-comment')

    const userInputString = userInputField.value

    const commentPTag = document.createElement('p')
    commentPTag.innerText = userInputString

    commentsContainer.appendChild(commentPTag)

  })

})
```
- "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized." - [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - Calling `document.createElement('p')` will create a `p` tag element.
  - This tag is an HTML object that we can _manipulate_ using JavaScript. We can change the style, or give it a particular `innerText` as a string.
    - "Node.innerText is a property that represents the "rendered" text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied to the clipboard." - [MDN Article on `innerText`](https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText)
- We can then `append` that `p` tag to the DOM by calling `commentsContainer.appendChild(commentPTag)`. Also note that `commentsContainer` is declared at the top of our function.

---

## External Resources:

- [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
- [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)
- [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Article on `innerText`](https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText)
