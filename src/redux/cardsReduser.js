import {UPDATE_CARDS} from "./types";

export const cardsReducer = (state = JSON.parse(localStorage.getItem('cards')) || [], action) => {
    switch (action.type) {
        case UPDATE_CARDS:
          return state = action.payload
        default: return state
    }
}