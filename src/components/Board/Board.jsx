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



    function addListItem(newItem) {
        return setLists([...lists, newItem]);
    }

    function addCardItem(newItem) {
        return setСards([...cards, newItem]);
    }


    return (
        <div>
            <div className={s.container}>
                <Lists dataLists={lists} dataCards={cards} dataComments={comments}/>
                <div>
                    <ListComposerContainer  addListItem={addListItem}
                                            // addCardItem={addCardItem}
                                            id={lists.length}/>
                </div>
                {/*<Button*/}
                {/*    onClick={ () => addCardItem(*/}
                {/*        {*/}
                {/*    id: 0,*/}
                {/*    authorID: 0,*/}
                {/*    listsID: 0,*/}
                {/*    name: '1',*/}
                {/*    description: "1",*/}
                {/*}*/}
                {/*)}*/}
                {/*variant="outline-secondary">Add card</Button>*/}
            </div>
        </div>
    );
}

export default Board;