import {UPDATE_LISTS} from "./types";

const initialState = [
  { id: 0, name: 'TODO' },
  { id: 1, name: 'In Progress' },
  { id: 2, name: 'Testing' },
  { id: 3, name: 'Done' },
]

export const listsReducer = (state = JSON.parse(localStorage.getItem('lists')) || initialState, action) => {
  switch (action.type) {
    case UPDATE_LISTS:
      return state = action.payload
    default: return state
  }
}