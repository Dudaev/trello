export const updateLists = text => ({
  type: 'UPRATE_LISTS',
  text,
});

export const setCards = addedCard => ({
  type: 'SET_CARDS',
  addedCard,
});

export const setComments = addedComment => ({
  type: 'SET_COMMENTS',
  addedComment,
});

export const setAuthor = text => ({
  type: 'SET_AUTHOR',
  text,
});
