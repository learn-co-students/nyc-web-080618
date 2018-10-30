import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';

export function addUserAction(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimalAction(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}
