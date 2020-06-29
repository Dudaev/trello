import { UPDATE_AUTHOR } from './types';

const authorReducer = (state = JSON.parse(localStorage.getItem('author')) || '', action) => {
  switch (action.type) {
    case UPDATE_AUTHOR:
      return action.payload;
    default:
      return state;
  }
};

export default authorReducer;
