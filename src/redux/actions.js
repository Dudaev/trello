import {UPDATE_AUTHOR, UPDATE_CARDS, UPDATE_COMMENTS, UPDATE_LISTS} from "./types";

export const updateLists = (lists) => {
    return {
        type:UPDATE_LISTS,
        payload: lists
    }
}

export const updateCards = (Card) => {
    return {
        type:UPDATE_CARDS,
        payload: Card
    }
}

export const updateComments = (Comment) => {
    return {
        type:UPDATE_COMMENTS,
        payload: Comment
    }
}

export const updateAuthor = (name) => {
    return {
        type:UPDATE_AUTHOR,
        payload: name
    }
}