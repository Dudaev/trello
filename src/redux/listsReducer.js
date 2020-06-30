import {UPDATE_LIST_NAME} from './types';

const initialState = [
  { id: 0, name: 'TODO' },
  { id: 1, name: 'In Progress' },
  { id: 2, name: 'Testing' },
  { id: 3, name: 'Done' },
];

const listsReducer = (state = JSON.parse(localStorage.getItem('lists')) || initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST_NAME:
      return state.map(list => {
        if (list.id === action.listId) {
          return { ...list, name: action.updatedName };
        }
        return list;
      });
    default:
      return state;
  }
};
export default listsReducer;
