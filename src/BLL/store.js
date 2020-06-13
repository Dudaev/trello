const ADD_LIST = 'ADD_LIST';
const UPDATE_NEW_LIST = 'UPDATE_NEW_LIST';

const ADD_CARD = 'ADD_CARD';
const UPDATE_NEW_CARD = 'UPDATE_NEW_CARD';

const UPDATE_NEW_VISIBLE_STATUS = 'UPDATE_NEW_VISIBLE_STATUS';

const UPDATE_LIST_TITLE_VISIBLE_STATUS = 'UPDATE_LIST_TITLE_VISIBLE_STATUS'

let store = {
    _state: {
        BoardPage:{
            lists: [
                {id: 0, name: 'TODO', numberOfCards:1, visible: false, visibleInputList: false, cards: [
                        {id: 0, authorID:0, listsID:0, name: 'Первая TODO карточка', description: "Тестовая карточка", numberOfComments:0, comments: []},
                        {id: 1, authorID:0, listsID:0, name: 'Вторая TODO карточка', description: "Вторая тестовая карточка", numberOfComments:3, comments: [
                                {id: 0, authorID:0, cardsID:1, body: "Первый TODO комментарий" },
                                {id: 1, authorID:0, cardsID:1, body: "Второй TODO комментарий" },
                                {id: 2, authorID:0, cardsID:1, body: "Третий TODO комментарий" },
                            ]},
                    ] },
                {id: 1, name: 'In Progress', numberOfCards:3, visible: false, visibleInputList: false, cards: [
                        {id: 2, authorID:0, listsID:1, name: 'Первая In Progress карточка', description: "Тестовая карточка", numberOfComments:0, comments: []},
                        {id: 3, authorID:0, listsID:1, name: 'Вторая In Progress карточка', description: "Тестовая карточка", numberOfComments:0, comments: []},
                    ] },
                {id: 2, name: 'Testing', numberOfCards:0, visible: false, visibleInputList: false, cards: [
                        {id: 4, authorID:0, listsID:2, name: 'Первая Testing карточка', description: "Тестовая карточка", numberOfComments:0, comments: []},
                    ] },
                {id: 3, name: 'Done', numberOfCards:0, visible: false, visibleInputList: false, cards: [
                        {id: 5, authorID:0, listsID:3, name: 'Первая Done карточка', description: "Тестовая карточка", numberOfComments:2, comments: [
                                {id: 0, authorID:0, cardsID:5, body: "Первый Done комментарий" },
                                {id: 1, authorID:0, cardsID:5, body: "Первый Done комментарий" }
                            ]},
                    ] },
            ],
            author: [
                {id:0, name: 'Nikita'}
            ],
            newListName: '',

            newCardName: '',


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
        switch (action.type) {
            case ADD_LIST:
                let newList = {
                    id: 0,
                    name: this._state.BoardPage.newListName,
                    numberOfCards: 0
                };
                this._state.BoardPage.lists.push(newList);
                this._state.BoardPage.newListName = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_LIST:
                this._state.BoardPage.newVisibleStatus = action.newVisibleStatus;
                this._callSubscriber(this._state)
                break;
            case ADD_CARD:
                let newCard = {
                    id: 0,
                    authorID: 0,
                    listsID: 0,
                    name: this._state.BoardPage.newCardName,
                    description: "Тестовая карточка",
                    numberOfComments: 0
                };
                this._state.BoardPage.cards.push(newCard);
                this._state.BoardPage.newCardName = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_CARD:
                this._state.BoardPage.newCardName = action.newCardName;
                this._callSubscriber(this._state)
                break;
            case UPDATE_NEW_VISIBLE_STATUS:
                function isPrime(element) {
                    return element.name === action.nameList;
                }
                let mass = this._state.BoardPage.lists.find(isPrime)
                mass.visible = action.newVisibleStatus
                this._callSubscriber(this._state)
                break;
            case UPDATE_LIST_TITLE_VISIBLE_STATUS:
                function choice(element) {
                    return element.name === action.nameList;
                }
                let arr = this._state.BoardPage.lists.find(choice)
                arr.visibleInputList = action.newVisibleStatus
                this._callSubscriber(this._state)
                break;
        }
    }
}

export const addListActionCreator = () => ({type: ADD_LIST})

export const updateListTitleVisibleActionCreator = (visibleStatus, nameList) =>
        ({type: UPDATE_LIST_TITLE_VISIBLE_STATUS, newVisibleStatus: visibleStatus, nameList: nameList })

export const updateNewListVisibleActionCreator = (visibleStatus, nameList) =>
    ({type: UPDATE_NEW_VISIBLE_STATUS, newVisibleStatus: visibleStatus, nameList: nameList})

export const addCardActionCreator = () => ({type: ADD_CARD})
export const updateNewCardNameActionCreator = (visibleStatus) =>
    ({type: UPDATE_NEW_CARD, visible: visibleStatus })

export default store;

window.store = store;