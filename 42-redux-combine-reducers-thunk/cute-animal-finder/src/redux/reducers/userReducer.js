import { ADD_USER } from '../types';


const initialUserState = {
  users: [],
  name: '',
};


export default function userReducer(state = initialUserState, action) {
  console.log('%c userReducer', 'color: orange', action);

  switch(action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    // case DELETE_USER
    //
    // case EDIT_USER
    //
    // CREATE_EMAIL
    case 'RESET':
      return initialUserState;
    default:
      return state;
  }
}
