import React, {useState} from 'react';
import s from './Board.module.css';
import ListComposerContainer from "./ListComposerContainer/ListComposerContainer";
import Lists from "./Lists/Lists";
import Login from "./Login/Login";

function Board() {
    let dataLists
    if (localStorage.getItem('lists')) {
        dataLists = JSON.parse(localStorage.getItem('lists'))
    } else {
        dataLists = [{id: 0, name: 'TODO'},{id: 1, name: 'In Progress'},{id: 2, name: 'Testing'},{id: 3, name: 'Done'},]
    }

    let dataCards
    if (localStorage.getItem('cards')) {
        dataCards = JSON.parse(localStorage.getItem('cards'))
    } else {
        dataCards = []
    }

    let dataComments
    if (localStorage.getItem('comments')) {
        dataComments = JSON.parse(localStorage.getItem('comments'))
    } else {
        dataComments = []
    }

    let dataAuthor
    if (localStorage.getItem('author')) {
        dataAuthor = JSON.parse(localStorage.getItem('author'))
    } else {
        dataAuthor = ''
    }
    const [lists, setLists] = useState(dataLists);
    const [cards, setCards] = useState(dataCards);
    const [comments, setComments] = useState(dataComments);
    const [author, setAuthor] = useState(dataAuthor);

    // const addListItem = newItem => {
    //     localStorage.setItem('lists', JSON.stringify([...lists, newItem]))
    //     setLists(JSON.parse(localStorage.getItem('lists'))  )
    // }

    const updateListTitle = (listId, newTitle) => {
        const newLists = lists.map(list => {
            if (list.id === listId) {
                return { ...list, name: newTitle };
            }
            return list;
        });
        localStorage.setItem('lists', JSON.stringify(newLists))
        setLists(JSON.parse(localStorage.getItem('lists'))  )
    };

    const addCardItem = newItem => {
        localStorage.setItem('cards', JSON.stringify([...cards, newItem]))
        setCards(JSON.parse(localStorage.getItem('cards'))  )
    }
    const removeCard = cardId => {
        const newCards = cards.filter(({ id }) => id !== cardId);
        localStorage.setItem('cards', JSON.stringify(newCards))
        setCards(JSON.parse(localStorage.getItem('cards'))  )

        const newComments = comments.filter(({ cardsID }) => cardsID !== cardId);
        localStorage.setItem('comments', JSON.stringify(newComments))
        setComments(JSON.parse(localStorage.getItem('comments'))  )

    };
    const handleUpdateCardTitle = (cardId, newTitle) => {
        const newCards = cards.map(c => {
            if (c.id === cardId) {
                return { ...c, name: newTitle };
            }
            return c;
        });
        localStorage.setItem('cards', JSON.stringify(newCards))
        setCards(JSON.parse(localStorage.getItem('cards'))  )
    }

    const handleAddDescription = (newDescription, cardId) => {
        const newCards = cards.map(c => {
            if (c.id === cardId) {
                return { ...c, description: newDescription };
            }
            return c;
        });
        localStorage.setItem('cards', JSON.stringify(newCards))
        setCards(JSON.parse(localStorage.getItem('cards'))  )
    }

    const handleAddComment = (newComment) => {
        localStorage.setItem('comments', JSON.stringify([...comments, newComment]))
        setComments(JSON.parse(localStorage.getItem('comments'))  )
    }

    const handleRemoveComment = (comId) => {
        const newComments = comments.filter(({ id }) => id !== comId);
        localStorage.setItem('comments', JSON.stringify(newComments))
        setComments(JSON.parse(localStorage.getItem('comments'))  )
    }

    const handleUpdateComment = (comId, UpdateComment) => {
        const newComments = comments.map(c => {
            if (c.id === comId) {
                return { ...c, body: UpdateComment };
            }
            return c;
        });

        localStorage.setItem('comments', JSON.stringify(newComments))
        setComments(JSON.parse(localStorage.getItem('comments')))
    }

    const handleAddAuthor = (newAuthor) => {
        localStorage.setItem('author', JSON.stringify(newAuthor))
        setAuthor(JSON.parse(localStorage.getItem('author'))  )
    }

    return (
        <div>
            <div className={s.container}>
                <Lists dataLists={lists}
                       dataCards={cards}
                       dataComments={comments}
                       addCardItem={addCardItem}
                       removeCard={removeCard}
                       updateListTitle={updateListTitle}
                       handleAddDescription={handleAddDescription}
                       handleAddComment={handleAddComment}
                       handleRemoveComment={handleRemoveComment}
                       handleUpdateComment={handleUpdateComment}
                       author={author}
                       handleUpdateCardTitle={handleUpdateCardTitle}
                />
                <div>
                    {/*<ListComposerContainer  addListItem={addListItem}*/}
                    {/*                        // addCardItem={addCardItem}*/}
                    {/*                        id={lists.length}/>*/}
                </div>
            </div>
            {
                dataAuthor === '' && <Login handleAddAuthor={handleAddAuthor} author={author}/>
            }

        </div>
    );
}

export default Board;