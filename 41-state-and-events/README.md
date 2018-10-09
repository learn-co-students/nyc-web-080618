# State & Events

## SWBAT

- [ ] Learn about event handlers in React
- [ ] Understand why we have synthetic events
- [ ] Learn the difference between props and state, and why one would use one or the other
- [ ] Instantiate state in and out of the constructor
- [ ] Create event handler callbacks that manipulate state
- [ ] Trigger rerenders by calling
- [ ] Manipulate the DOM by changing values in state
- [ ] Get more familiarity with component hierarchy and the flow of information

## Lecture Notes

### Event Handlers

- React wraps all events and tries its best to abstract them into a single API that _should_ act the same across browsers.
- This is one reason why React has what they call [_Synthetic Events_](https://reactjs.org/docs/handling-events.html).
- Another reason is so the same API for all event handlers can be used for other platforms. For example: Instead of `react-dom`, we use `react-native`.

**The `event` Object**

- It is pooled. What that means is that this object will not live beyond the context it's called in. So if you want to pass the `event` object around and use it in an asynchronous function, it will suddenly "disappear" meaning the values in it become null.
- React built it this way for performance reasons.
- You can keep the `event` object around for longer if you use `event.persist()`.
- Other useful things in the `event` object:
  - `event.target` => points to the object (in our case a DOM element) where the `event` originates from.
  - `event.target.value`
  - `event.target.name`
  - `event.target.dataset.dataValueCamelCased` === `event.target.getAttribute('data-value-as-written')`

### React Components

- Identify components with the Single Responsibility Principle
- Functional vs Class Components
  - Functional is almost always a Presentational Component
  - Class Components can have `state` and lifecycle methods.
- Attributes => `props`
- return / render
  - Must always return 1 object or an array of objects.
- Composition over Inheritance => we'll get to this eventually

### Props vs State

Learn by doing! Let's build something that needs state!

- [`state` is data that will change](https://facebook.github.io/react-native/docs/state.html).
- How do we define it?
  - `constructor` vs `state = {}`
- How do we change it?
  - **Never** mutate `state`!!!
  - Always **make copies** of `state`!!!
  - We change it with `setState`
  - `this.state =` **returns 3 additional weeks of react**
- _Briefly_ - Event Handlers
  - `onClick` to execute some action
- Debugging `state`:
  - `setState` is asynchronous
    - `debugger` gotcha
  - `setState` callback function
  - `render` as a way to also test `setState`
- `data` and `functions` go down, `function calls` go up

Why is all of this nice?

- Component isolation === reusability up up up!!

## Extras

- [React Events in Depth](https://www.youtube.com/watch?v=dRo_egw7tBc)
- [Function Binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [Class Field Declarations](https://github.com/tc39/proposal-class-fields)
- [event.target vs event.currentTarget](https://github.com/facebook/react/issues/5733)
- [JavaScript Event Delegation, and event.target vs. event.currentTarget](https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1)
