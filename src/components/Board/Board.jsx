import React, { useEffect } from 'react';
import styles from './Board.module.css';
import Lists from './Lists/Lists.jsx';
import Login from './Login/Login.jsx';

function Board(props) {

  const handleUpdateListName = (listId, updatedName) => {
    const newLists = props.lists.map(list => {
      if (list.id === listId) {
        return { ...list, name: updatedName };
      }
      return list;
    });
    props.setLists(newLists);
  };

  const handleAddCard = addedCard => {
    props.setCards([...props.cards, addedCard]);
  };

  const handleRemoveCard = cardId => {
    const newCards = props.cards.filter(({ id }) => id !== cardId);
    props.setCards(newCards);

    const newComments = props.comments.filter(comment => comment.cardId !== cardId);
    props.setComments(newComments);
  };

  const handleUpdateCardTitle = (cardId, updatedTitle) => {
    const newCards = props.cards.map(card => {
      if (card.id === cardId) {
        return { ...card, name: updatedTitle };
      }
      return card;
    });
    props.setCards(newCards);
  };

  const handleAddDescription = (addedDescription, cardId) => {
    const newCards = props.cards.map(card => {
      if (card.id === cardId) {
        return { ...card, description: addedDescription };
      }
      return card;
    });
    props.setCards(newCards);
  };

  const handleAddComment = addedComment => {
    props.setComments([...props.comments, addedComment]);
  };

  const handleRemoveComment = commentId => {
    const newComments = props.comments.filter(({ id }) => id !== commentId);
    props.setComments(newComments);
  };

  const handleUpdateComment = (commentId, updatedBody) => {
    const newComments = props.comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, body: updatedBody };
      }
      return comment;
    });
    props.setComments(newComments);
  };

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(props.cards));
    localStorage.setItem('comments', JSON.stringify(props.comments));
    localStorage.setItem('lists', JSON.stringify(props.lists));
    localStorage.setItem('author', JSON.stringify(props.author));
  }, [props.cards, props.comments, props.lists, props.uthor]);

  return (
    <div>
      <div className={styles.container}>
        <Lists
          lists={props.lists}
          cards={props.cards}
          comments={props.comments}
          author={props.author}
          handleAddCard={handleAddCard}
          handleRemoveCard={handleRemoveCard}
          handleUpdateListName={handleUpdateListName}
          handleAddDescription={handleAddDescription}
          handleAddComment={handleAddComment}
          handleRemoveComment={handleRemoveComment}
          handleUpdateComment={handleUpdateComment}
          handleUpdateCardTitle={handleUpdateCardTitle}
        />
      </div>
      {props.initialAuthor === '' && <Login setAuthor={props.setAuthor} />}
    </div>
  );
}

export default Board;
