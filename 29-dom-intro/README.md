# The Document Object Model

## Outline

- Understand the Structure of the Document Object Model
- Use JavaScript to manipulate the DOM
- Use JavaScript to append elements to the DOM using `document.createElement` and string templates

## The DOM is a Tree

- DOM (Document Object Model)
  - A tree structure starting at the document
  - Every element is a `node` in the tree
  - Every element is related in this structure to every other element
  - We can find elements by traversing the DOM using JavaScript
  - Each element has a parent (except one) and children (maybe)
  - Elements have properties that can be manipulated
  - `document` object
    - `document.body`
- Element interfaces
  - Different elements (`table`, `p`, `image`) support different methods
    - `image.src`, for instance
  - You have to look up the element (in documentation) to know which properties/ methods we can interact with


## Manipulating the DOM with JavaScript


| Selector name                      | Return shape   | Return type    | Live? | Reference             | forEach? |
| ---------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | Node  | https://goo.gl/vTfXza | Yes      |

---

## External Resources:

- [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
