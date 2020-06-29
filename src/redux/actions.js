import { UPDATE_AUTHOR, UPDATE_CARDS, UPDATE_COMMENTS, UPDATE_LISTS } from './types';

export const updateLists = lists => ({
  type: UPDATE_LISTS,
  payload: lists,
});

export const updateCards = Card => ({
  type: UPDATE_CARDS,
  payload: Card,
});

export const updateComments = Comment => ({
  type: UPDATE_COMMENTS,
  payload: Comment,
});

export const updateAuthor = name => ({
  type: UPDATE_AUTHOR,
  payload: name,
});
