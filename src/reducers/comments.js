const comments = (state = [], action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      const { text } = action;
      return { ...state, text };
    default:
      return state;
  }
};

export default comments;
