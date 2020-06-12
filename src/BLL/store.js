const ADD_LIST = 'ADD_LIST';
const UPDATE_NEW_LIST = 'UPDATE_NEW_LIST';

let store = {
    _state: {
        BoardPage:{
            lists: [
                {id: 0, name: 'TODO', numberOfCards:1},
                {id: 1, name: 'In Progress', numberOfCards:3},
                {id: 2, name: 'Testing', numberOfCards:0},
                {id: 3, name: 'Done', numberOfCards:0},
            ],
            cards: [
                {id: 0, authorID:0, listsID:0, name: 'Первая карточка', description: "Тестовая карточка", numberOfComments:0},
                {id: 1, authorID:0, listsID:0, name: 'Вторая карточка', description: "Вторая тестовая карточка", numberOfComments:3},
            ],
            comments: [
                {id: 0, authorID:0, cardsID:1, body: "Первый комментарий" },
                {id: 1, authorID:0, cardsID:1, body: "Второй комментарий" },
                {id: 2, authorID:0, cardsID:1, body: "Третий комментарий" }
            ],
            author: [
                {id:0, name: 'Nikita'}
            ],
            newListName: '',
            newCard: '',
            newComment: '',
            newAuthor: ''
        }


    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_LIST) {
            let newList = {
                id: 0,
                name: this._state.BoardPage.newListName,
                numberOfCards:0
            };
            this._state.BoardPage.lists.push(newList);
            this._state.BoardPage.newListName = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_LIST) {
            this._state.BoardPage.newListName = action.newList;
            this._callSubscriber(this._state)
    }
}

export default store;