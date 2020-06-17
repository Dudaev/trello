import React, {useState} from 'react';
import s from './Board.module.css';
import ListComposerContainer from "./ListComposerContainer/ListComposerContainer";
import Lists from "./Lists/Lists";
import {Button} from "react-bootstrap";

function Board() {
    const [lists, setLists] = useState([
        {
            id: 0, name: 'TODO'
        },
        {
            id: 1, name: 'In Progress'
        },
        {
            id: 2, name: 'Testing'
        },
        {
            id: 3, name: 'Done'
        },

    ]);
    const [cards, setСards] = useState([
        {
            id: 0,
            authorID: 0,
            listsID: 0,
            name: 'Первая TODO карточка',
            description: "Тестовая карточка",
        },
        {
            id: 1,
            authorID: 0,
            listsID: 0,
            name: 'Вторая TODO карточка',
            description: "Вторая тестовая карточка",
        },
        {
            id: 2,
            authorID: 0,
            listsID: 1,
            name: 'Первая In Progress карточка',
            description: "Тестовая карточка",
        },
        {
            id: 3,
            authorID: 0,
            listsID: 1,
            name: 'Вторая In Progress карточка',
            description: "Тестовая карточка",
        },
        {
            id: 4,
            authorID: 0,
            listsID: 2,
            name: 'Первая Testing карточка',
            description: "Тестовая карточка",
        },
        {
            id: 5,
            authorID: 0,
            listsID: 3,
            name: 'Первая Done карточка',
            description: "Тестовая карточка",
        },

    ]);
    const [comments, setСomments] = useState([
        {id: 0, authorID: 0, cardsID: 1, body: "Первый TODO комментарий"},
        {id: 1, authorID: 0, cardsID: 1, body: "Второй TODO комментарий"},
        {id: 2, authorID: 0, cardsID: 1, body: "Третий TODO комментарий"},
        {id: 3, authorID: 0, cardsID: 5, body: "Первый Done комментарий"},
        {id: 4, authorID: 0, cardsID: 5, body: "Первый Done комментарий"}
    ]);



    const addListItem = newItem => setLists([...lists, newItem]);

    const updateListTitle = (listId, newTitle) => {
        const newLists = lists.map(list => {
            if (list.id === listId) {
                return { ...list, name: newTitle };
            }
            return list;
        });
        setLists(newLists);
    };

    const addCardItem = newItem => setСards([...cards, newItem]);

    const removeCard = cardId => {
        const newCards = cards.filter(({ id }) => id !== cardId);
        setСards(newCards);
    };

    return (
        <div>
            <div className={s.container}>
                <Lists dataLists={lists} dataCards={cards} dataComments={comments} addCardItem={addCardItem} removeCard={removeCard} updateListTitle={updateListTitle}/>
                <div>
                    <ListComposerContainer  addListItem={addListItem}
                                            // addCardItem={addCardItem}
                                            id={lists.length}/>
                </div>
            </div>
        </div>
    );
}

export default Board;