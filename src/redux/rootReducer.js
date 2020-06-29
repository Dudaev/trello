import { combineReducers } from 'redux';
import { listsReducer } from './listsReducer';
import { cardsReducer } from "./cardsReduser";
import { commentsReducer } from "./commentsReduser";
import { authorReducer } from "./authorReduser";

export const rootReducer = combineReducers({
  listsReducer,
  cardsReducer,
  commentsReducer,
  authorReducer
});
