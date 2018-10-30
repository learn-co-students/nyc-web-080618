import { UPDATE_ANIMAL } from '../types';

const initialAnimalState = {
  animalSrc: null,
  name: '',
  isLoading: true,
};

// Pure Function - same output for every input, no side effects
// action = { type, payload }
export default function animalReducer(state = initialAnimalState, action) {
  console.log('%c animalReducer', 'color: pink', action);

  switch(action.type) {
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    case "FETCHING_DOG":
      return { ...state, isLoading: true };
    case "FETCHED_DOG":
      return { ...state, isLoading: false };
    // LIKE_ANIMAL_PICTURE
    //
    // DISLIKE_ANIMAL_PICTURE
    case 'RESET':
      return initialAnimalState;
    default:
      return state;
  }
}
