const author = (state = '', action) => {
  switch (action.type) {
    case 'SET_AUTHOR':
      return action.text;
    default:
      return state;
  }
};

export default author;
