# The Document Object Model

Code associated to the Document Object Model lecture

## Outline

- Orchestration, paintbrushes (JS and CSS) and the canvas
- An instrument for expression or utility
- From a string to a page
- From a static page to an interactive experience
- Abstraction layer between HTML (string), JavaScript and what we see on the page
  - String
  - DOM
  - DOM as a tree
  - DOM elements
  - Interpret CSS (CSS Object Model) and JS
- Back to CRUD
- DOM Manipulation
  - Finding DOM Elements
  - Creating DOM elements
    - From text to DOM
    - From objs to DOM
  - Altering DOM elements
- What is jQuery
- **Build something** (flatStaGram)

## Selectors

| Selector name                      | Return shape   | Return type    | Live? | Reference             | forEach? |
| ---------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | Node  | https://goo.gl/vTfXza | Yes      |

Resources:

- [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

---

---

---

# The Browser (DOM, BOM)

- What is it?
  - The HTML you write?
  - The page source?
  - The Elements tab in Dev Tools?
- How does JavaScript work in the browser?
  - Browser code
  - JavaScript engine
  - JavaScript standard library
  - Browser APIs
  - Your code!
- DOM (Document Object Model)
  - A tree structure starting at the document
  - Every element is a node in the tree
  - Every element is related in this structure to every other element
  - We can find elements by traversing the DOM
  - Each element has a parent (except one) and children (maybe)
  - Elements have properties that can be manipulated
  - `window` object
  - `document` object
- Element interfaces
  - Different elements (`table`, `p`, `image`) support different methods
  - You have to look up the element (in documentation or in prototype chain) to know what properties are accessible to
    change and methods available to call
- BOM (Browser Object Model)
  - The things that we can access about the browser in our code
  - Examples
    - `console` object
    - `navigator` object
    - `location` object
    - `history` object
    - `localStorage` object
    - timers
  - Everything that is not part of the document!
- DOM and BOM APIs
  - The code that is available to us to manipulate the DOM and the BOM :)
- Templating
  - We used to use ERB
  - Now we'll write templates for dynamically updating our web page without refreshing
