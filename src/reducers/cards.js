const cards = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARDS':
      const { text } = action;
      return { ...state, text };
    default:
      return state;
  }
};

export default cards;
