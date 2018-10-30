import { combineReducers } from 'redux';
import userReducer from './userReducer';
import animalReducer from './animalReducer';

export default combineReducers({
  user: userReducer,
  animal: animalReducer,
})
