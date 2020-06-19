import React, { useState } from 'react';
import styles from './Board.module.css';

import Lists from './Lists/Lists.jsx';

import Login from './Login/Login.jsx';

function Board() {

  const initialLists =   JSON.parse(localStorage.getItem('lists')) || [
    { id: 0, name: 'TODO' },
    { id: 1, name: 'In Progress' },
    { id: 2, name: 'Testing' },
    { id: 3, name: 'Done' },
  ];
  const initialCards =   JSON.parse(localStorage.getItem('cards')) || [];
  const initialComments =   JSON.parse(localStorage.getItem('comments')) || [];
  const initialAuthor =   JSON.parse(localStorage.getItem('author')) || [];


  const [lists, setLists] = useState(initialLists);
  const [cards, setCards] = useState(initialCards);
  const [comments, setComments] = useState(initialComments);
  const [author, setAuthor] = useState(initialAuthor);

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
    localStorage.setItem('lists', JSON.stringify(newLists));
    setLists(JSON.parse(localStorage.getItem('lists')));
  };

  const addCardItem = newItem => {
    localStorage.setItem('cards', JSON.stringify([...cards, newItem]));
    setCards(JSON.parse(localStorage.getItem('cards')));
  };
  const removeCard = cardId => {
    const newCards = cards.filter(({ id }) => id !== cardId);
    localStorage.setItem('cards', JSON.stringify(newCards));
    setCards(JSON.parse(localStorage.getItem('cards')));

    const newComments = comments.filter(({ cardsID }) => cardsID !== cardId);
    localStorage.setItem('comments', JSON.stringify(newComments));
    setComments(JSON.parse(localStorage.getItem('comments')));
  };
  const handleUpdateCardTitle = (cardId, newTitle) => {
    const newCards = cards.map(c => {
      if (c.id === cardId) {
        return { ...c, name: newTitle };
      }
      return c;
    });
    localStorage.setItem('cards', JSON.stringify(newCards));
    setCards(JSON.parse(localStorage.getItem('cards')));
  };

  const handleAddDescription = (newDescription, cardId) => {
    const newCards = cards.map(c => {
      if (c.id === cardId) {
        return { ...c, description: newDescription };
      }
      return c;
    });
    localStorage.setItem('cards', JSON.stringify(newCards));
    setCards(JSON.parse(localStorage.getItem('cards')));
  };

  const handleAddComment = newComment => {
    localStorage.setItem('comments', JSON.stringify([...comments, newComment]));
    setComments(JSON.parse(localStorage.getItem('comments')));
  };

  const handleRemoveComment = comId => {
    const newComments = comments.filter(({ id }) => id !== comId);
    localStorage.setItem('comments', JSON.stringify(newComments));
    setComments(JSON.parse(localStorage.getItem('comments')));
  };

  const handleUpdateComment = (comId, UpdateComment) => {
    const newComments = comments.map(c => {
      if (c.id === comId) {
        return { ...c, body: UpdateComment };
      }
      return c;
    });

    localStorage.setItem('comments', JSON.stringify(newComments));
    setComments(JSON.parse(localStorage.getItem('comments')));
  };

  const handleAddAuthor = newAuthor => {
    localStorage.setItem('author', JSON.stringify(newAuthor));
    setAuthor(JSON.parse(localStorage.getItem('author')));
  };

  return (
    <div>
      <div className={styles.container}>
        <Lists
          dataLists={lists}
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
      </div>
      {initialAuthor === '' && <Login handleAddAuthor={handleAddAuthor} author={author} />}
    </div>
  );
}

export default Board;
