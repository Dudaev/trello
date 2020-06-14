let store = {
        BoardPage: {
            lists: [
                {
                    id: 0, name: 'TODO', numberOfCards: 1, visible: false, visibleInputList: false, cards: [
                        {
                            id: 0,
                            authorID: 0,
                            listsID: 0,
                            name: 'Первая TODO карточка',
                            description: "Тестовая карточка",
                            numberOfComments: 0,
                            comments: []
                        },
                        {
                            id: 1,
                            authorID: 0,
                            listsID: 0,
                            name: 'Вторая TODO карточка',
                            description: "Вторая тестовая карточка",
                            numberOfComments: 3,
                            comments: [
                                {id: 0, authorID: 0, cardsID: 1, body: "Первый TODO комментарий"},
                                {id: 1, authorID: 0, cardsID: 1, body: "Второй TODO комментарий"},
                                {id: 2, authorID: 0, cardsID: 1, body: "Третий TODO комментарий"},
                            ]
                        },
                    ]
                },
                {
                    id: 1, name: 'In Progress', numberOfCards: 3, visible: false, visibleInputList: false, cards: [
                        {
                            id: 2,
                            authorID: 0,
                            listsID: 1,
                            name: 'Первая In Progress карточка',
                            description: "Тестовая карточка",
                            numberOfComments: 0,
                            comments: []
                        },
                        {
                            id: 3,
                            authorID: 0,
                            listsID: 1,
                            name: 'Вторая In Progress карточка',
                            description: "Тестовая карточка",
                            numberOfComments: 0,
                            comments: []
                        },
                    ]
                },
                {
                    id: 2, name: 'Testing', numberOfCards: 0, visible: false, visibleInputList: false, cards: [
                        {
                            id: 4,
                            authorID: 0,
                            listsID: 2,
                            name: 'Первая Testing карточка',
                            description: "Тестовая карточка",
                            numberOfComments: 0,
                            comments: []
                        },
                    ]
                },
                {
                    id: 3, name: 'Done', numberOfCards: 0, visible: false, visibleInputList: false, cards: [
                        {
                            id: 5,
                            authorID: 0,
                            listsID: 3,
                            name: 'Первая Done карточка',
                            description: "Тестовая карточка",
                            numberOfComments: 2,
                            comments: [
                                {id: 0, authorID: 0, cardsID: 5, body: "Первый Done комментарий"},
                                {id: 1, authorID: 0, cardsID: 5, body: "Первый Done комментарий"}
                            ]
                        },
                    ]
                },
            ],
            author: [
                {id: 0, name: 'Nikita'}
            ],
        }
}

export default store;

window.store = store;