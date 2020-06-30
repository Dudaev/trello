import {ADD_CARD, ADD_DESCRIPTION, REMOVE_CARD, SHOW_CARD_DETAIL, UPDATE_CARD_TITLE} from './types';

const cardsReducer = (state = JSON.parse(localStorage.getItem('cards')) || [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.addedCard];
    case REMOVE_CARD:
      return state.filter(({ id }) => id !== action.cardId);
    case SHOW_CARD_DETAIL:
      return state.map(card => {
        if (card.id === action.cardId) {
          return { ...card, showCardDetail: !card.showCardDetail };
        }
        return card;
      });
    case UPDATE_CARD_TITLE:
      return state.map(card => {
        if (card.id === action.cardId) {
          return { ...card, name: action.updatedTitle };
        }
        return card;
      });
    case ADD_DESCRIPTION:
      return state.map(card => {
        if (card.id === action.cardId) {
          return { ...card, description: action.addedDescription };
        }
        return card;
      });
    default:
      return state;
  }
};
export default cardsReducer;
