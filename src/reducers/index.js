import { combineReducers } from 'redux';
import lists from './lists';
import cards from './cards';
import comments from './cards';
import author from './cards';

export default combineReducers({
  lists,
  cards,
  comments,
  author,
});
