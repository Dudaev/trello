import {UPDATE_AUTHOR} from "./types";

export const authorReducer = (state = JSON.parse(localStorage.getItem('author')) || '', action) => {
    switch (action.type) {
        case UPDATE_AUTHOR:
          return state = action.payload
        default: return state
    }

}