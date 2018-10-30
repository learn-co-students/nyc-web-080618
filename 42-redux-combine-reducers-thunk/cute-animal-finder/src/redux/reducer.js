import { ADD_USER, UPDATE_ANIMAL } from './types';
import { combineReducers } from 'redux';

const initialUserState = {
  users: [],
  name: '',
};


export function userReducer(state = initialUserState, action) {
  switch(action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    // case DELETE_USER
    //
    // case EDIT_USER
    //
    // CREATE_EMAIL
    default:
      return state;
  }
}


const initialAnimalState = {
  animalSrc: null,
  name: '',
};

// Pure Function - same output for every input, no side effects
// action = { type, payload }
export function animalReducer(state = initialAnimalState, action) {
  switch(action.type) {
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };

    // LIKE_ANIMAL_PICTURE
    //
    // DISLIKE_ANIMAL_PICTURE
    default:
      return state;
  }
}

export default combineReducers({
  user: userReducer,
  animal: animalReducer,
})
