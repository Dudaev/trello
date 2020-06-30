// eslint-disable-next-line import/named
import {
  UPDATE_AUTHOR,
  UPDATE_LIST_NAME,
  ADD_CARD,
  REMOVE_CARD,
  REMOVE_COMMENT,
  SHOW_CARD_DETAIL,
  UPDATE_CARD_TITLE,
  ADD_DESCRIPTION,
  ADD_COMMENT,
  REMOVE_CARD_COMMENTS,
  UPDATE_COMMENT,
} from './types';

export const updateAuthor = name => ({
  type: UPDATE_AUTHOR,
  payload: name,
});

export const handleUpdateListName = (listId, updatedName) => ({
  type: UPDATE_LIST_NAME,
  listId,
  updatedName,
});

export const handleAddCard = addedCard => ({
  type: ADD_CARD,
  addedCard,
});

export const handleRemoveCard = cardId => ({
  type: REMOVE_CARD,
  cardId,
});

export const handleRemoveCardComments = cardId => ({
  type: REMOVE_CARD_COMMENTS,
  cardId,
});

export const handleUpdateShowCardDetail = cardId => ({
  type: SHOW_CARD_DETAIL,
  cardId,
});

export const handleUpdateCardTitle = (cardId, updatedTitle) => ({
  type: UPDATE_CARD_TITLE,
  cardId,
  updatedTitle,
});

export const handleAddDescription = (addedDescription, cardId) => ({
  type: ADD_DESCRIPTION,
  addedDescription,
  cardId,
});

export const handleAddComment = addedComment => ({
  type: ADD_COMMENT,
  addedComment,
});

export const handleRemoveComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId,
});

export const handleUpdateComment = (commentId, updatedBody) => ({
  type: UPDATE_COMMENT,
  commentId,
  updatedBody,
});
