import React, {useState} from 'react';
import s from './Board.module.css';
import ListComposerContainer from "./ListComposerContainer/ListComposerContainer";
import Lists from "./Lists/Lists";
import {Button} from "react-bootstrap";

function Board() {
    const [lists, setLists] = useState([
        {
            id: 0, name: 'TODO', cards: [
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
            id: 1, name: 'In Progress', cards: [
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
            id: 2, name: 'Testing', cards: [
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
            id: 3, name: 'Done', cards: [
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
    ]);


    function addListItem(newItem) {
        return setLists([...lists, newItem]);
    }

    function addCardItem(newItem) {
        return setLists([...lists[0].cards , newItem] );
    }


    return (
        <div>
            <div className={s.container}>
                <Lists data={lists}/>
                <div>
                    <ListComposerContainer  addListItem={addListItem}
                                            // addCardItem={addCardItem}
                                            id={lists.length}/>
                </div>
                <Button
                    onClick={ () => addCardItem(
                        [{
                    id: 0,
                    authorID: 0,
                    listsID: 0,
                    name: '1',
                    description: "1",
                    numberOfComments: 0,
                    comments: []
                }]
                )}
                variant="outline-secondary">Add card</Button>
            </div>
        </div>
    );
}

export default Board;