const lists = (
  state = [
    { id: 0, name: 'TODO' },
    { id: 1, name: 'In Progress' },
    { id: 2, name: 'Testing' },
    { id: 3, name: 'Done' },
  ],
  action,
) => {
  switch (action.type) {
    case 'UPDATE_LISTS':
      const newLists = state.map(list => {
        if (list.id === listId) {
          return { ...list, name: action.text };
        }
        return list;
      });
      return { ...state, newLists };
    default:
      return state;
  }
};

export default lists;
