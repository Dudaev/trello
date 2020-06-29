import { UPDATE_COMMENTS } from './types';

const commentsReducer = (state = JSON.parse(localStorage.getItem('comments')) || [], action) => {
  switch (action.type) {
    case UPDATE_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};
export default commentsReducer;
