import {ADD_COMMENT, REMOVE_CARD_COMMENTS, REMOVE_COMMENT} from './types';

const commentsReducer = (state = JSON.parse(localStorage.getItem('comments')) || [], action) => {
  switch (action.type) {
    case REMOVE_CARD_COMMENTS:
      return state.filter(comment => comment.cardId !== action.cardId);
    case ADD_COMMENT:
      return [...state, action.addedComment];
    case REMOVE_COMMENT:
      return state.filter(({ id }) => id !== action.commentId);
    default:
      return state;
  }
};
export default commentsReducer;
