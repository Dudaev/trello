import React, { useState, useEffect } from 'react';
import styles from './Board.module.css';
import Lists from './Lists/Lists.jsx';
import Login from './Login/Login.jsx';

const initialLists =   JSON.parse(localStorage.getItem('lists')) || [
  { id: 0, name: 'TODO' },
  { id: 1, name: 'In Progress' },
  { id: 2, name: 'Testing' },
  { id: 3, name: 'Done' },
];
const initialCards = JSON.parse(localStorage.getItem('cards')) || [];
const initialComments = JSON.parse(localStorage.getItem('comments')) || [];
const initialAuthor = JSON.parse(localStorage.getItem('author')) || '';

function Board() {

  const [lists, setLists] = useState(initialLists);
  const [cards, setCards] = useState(initialCards);
  const [comments, setComments] = useState(initialComments);
  const [author, setAuthor] = useState(initialAuthor);

  const handleUpdateListTitle = (listId, newTitle) => {
    const newLists = lists.map(list => {
      if (list.id === listId) {
        return { ...list, name: newTitle };
      }
      return list;
    });
    setLists(newLists);
  };

  const handleAddCard = newCard => {
    setCards([...cards, newCard]);
  };
  const handleRemoveCard = idOfRemovedCard => {
    const newCards = cards.filter(({ id }) => id !== idOfRemovedCard);
    setCards(newCards);

    const newComments = comments.filter(({ cardsId }) => cardsId !== idOfRemovedCard);
    setComments(newComments);
  };
  const handleUpdateCardTitle = (cardId, newTitle) => {
    const newCards = cards.map(card => {
      if (card.id === cardId) {
        return { ...card, name: newTitle };
      }
      return card;
    });
    setCards(newCards);
  };

  const handleAddDescription = (newDescription, cardId) => {
    const newCards = cards.map(card => {
      if (card.id === cardId) {
        return { ...card, description: newDescription };
      }
      return card;
    });
    setCards(newCards);
  };

  const handleAddComment = newComment => {
    setComments([...comments, newComment]);
  };

  const handleRemoveComment = commentId => {
    const newComments = comments.filter(({ id }) => id !== commentId);
    setComments(newComments);
  };

  const handleUpdateComment = (commentId, newBody) => {
    const newComments = comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, body: newBody };
      }
      return comment;
    });
    setComments(newComments);
  };


  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
    localStorage.setItem('comments', JSON.stringify(comments));
    localStorage.setItem('lists', JSON.stringify(lists));
    localStorage.setItem('author', JSON.stringify(author));
    }, [cards, comments, lists, author]
  );

  return (
    <div>
      <div className={styles.container}>
        <Lists
          lists={lists}
          cards={cards}
          comments={comments}
          author={author}
          handleAddCard={handleAddCard}
          handleRemoveCard={handleRemoveCard}
          handleUpdateListTitle={handleUpdateListTitle}
          handleAddDescription={handleAddDescription}
          handleAddComment={handleAddComment}
          handleRemoveComment={handleRemoveComment}
          handleUpdateComment={handleUpdateComment}
          handleUpdateCardTitle={handleUpdateCardTitle}
        />
      </div>
      {initialAuthor === '' && <Login setAuthor={setAuthor} author={author} />}
    </div>
  );
}

export default Board;
