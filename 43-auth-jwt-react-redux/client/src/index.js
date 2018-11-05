import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import App from './App'
import usersReducer from './reducers/usersReducer' //TODO: move
import registerServiceWorker from './registerServiceWorker'

const rootReducer = combineReducers({ usersReducer: usersReducer }) //TODO: move this too

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) //TODO: move this

console.log(`%c INITIAL REDUX STORE`, 'color: purple', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
