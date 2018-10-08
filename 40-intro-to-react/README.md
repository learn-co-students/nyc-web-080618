Intro to React
==============

## SWBAT

- [ ] Setup a new React app and play around with building things
- [ ] Understand how create-react-app works and what it offers a developer
- [ ] Learn how to identify components on a page, visually
- [ ] Build custom components and see initial JSX
- [ ] See what a React Component actually is (an object, made by a class)
- [ ] Build modular & reusable components
- [ ] See how props are to components as arguments are to functions

## Outline

### History / Context of React

- Why React?
  - React is for building UIs!
- react vs react-dom

### create-react-app setup

[Try React](https://reactjs.org/docs/try-react.html)
- create-react-app
  ```sh
  npm install -g create-react-app
  create-react-app app-name

  cd app-name
  npm start
  ```

- Anatomy of a `create-react-app`:
  - `public` => folder containing files served by our web server
  - `src` => all of our React code
    - `index.js` => entry point to the React app; this has `ReactDOM.render` which puts all of our code into the DOM element we tell it to put it into (in our case, `<div id="root">`)
    - `App.js` => our root React component; all apps will have it
    - `App.css`, `index.css` => css files
    - `App.test.js` => test file
    - `registerServiceWorker.js` => helper file for cache stuff
  - `.gitignore` => git ignore
  - `package.json` => your "Gemfile"
  - `README.md` => readme file
- Benefits to using it:
  - Hot Reloading
  - Easily add dependencies
  - Work all in JavaScript

### Component Hello World

The anatomy of a React app:
- `document.getElementById('root')`
- That's where we everything is rendered.

Simplest Component:

```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default App;
```

- `React` import is needed in any file where you use JSX.
- `render()` method is required in a Component as that's what will be called to figure out what to eventually render in the browser.

### JSX

- It's **syntatic sugar** for `React.createElement`.
  - Note that JSX won't actually work in browser console!!
  - It's translated by Babel into regular JavaScript.
- rules, differences with HTML
  - Upper case = Component
  - Lower case = HTML to render to DOM
  - Attributes = camelCase
  - Attributes = serve double duty as `props`
  - Stuff in-between open & Close Tags = `children`
- HTML vs Components
  - Lower vs Upper case
  - What gets rendered? Let's inspect it!
- expressions = `{ }`
  - Expressions Evaluate
  - [Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions): An expression is any valid unit of code that resolves to a value.

**JSX Attributes Example:**

- Attributes we'll see are also our `props` for Components.
- They need some value assigned to them which is either a string or whatever an expression, `{}`, evaluates to.

```javascript
import logo from './logo.svg';

// ... somewhere in render

<img src={logo} alt="some image" />
```

### JSX Extras / Gotchas

Commenting in JSX
- `{/* commented */}`

Any JavaScript reserved words have special names in JSX attributes:
- `class` => `className`
- `for` => `htmlFor`

Data and aria attributes are special. They keep kebab-casing:
- `data-attribute`
- `aria-attribute`

### codesandbox links
- [First blog application](https://codesandbox.io/s/5vnnqr7q24) 
- [Second blog application](https://codesandbox.io/s/6yr1mqwkrz) 