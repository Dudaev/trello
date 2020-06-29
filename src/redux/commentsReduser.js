import {UPDATE_COMMENTS} from "./types";

export const commentsReducer = (state = JSON.parse(localStorage.getItem('comments')) || [], action) => {
    switch (action.type) {
        case UPDATE_COMMENTS:
          return state = action.payload
        default: return state
    }
}