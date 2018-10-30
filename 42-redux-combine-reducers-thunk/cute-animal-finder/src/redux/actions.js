import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';
import AnimalAdapter from '../apis/AnimalAdapter';

export function addUser(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimal(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

export function fetchAnimal() {
  return (dispatch) => {
    dispatch({ type: "FETCHING_DOG" })

    AnimalAdapter.getDog()
      .then(url => {
        console.log("whatup?");
        dispatch(updateAnimal(url))
        dispatch({ type: "FETCHED_DOG" })
      })
  }
  //
  // console.log('before fetch');
  // AnimalAdapter.getDog()
  //   .then(url => {
  //     console.log('inside fetch');
  //     return {
  //       type: UPDATE_ANIMAL,
  //       payload: url,
  //     }
  //     // dispatch(updateAnimalAction(url))
  //   })
  //
  // console.log('after fetch');
}
