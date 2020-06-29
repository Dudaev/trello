import { UPDATE_CARDS } from './types';

const cardsReducer = (state = JSON.parse(localStorage.getItem('cards')) || [], action) => {
  switch (action.type) {
    case UPDATE_CARDS:
      return action.payload;
    default:
      return state;
  }
};
export default cardsReducer;
