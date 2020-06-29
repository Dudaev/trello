import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './Board.module.css';
import Lists from './Lists/Lists.jsx';
import Login from './Login/Login.jsx';
import { updateAuthor, updateCards, updateComments, updateLists } from '../../redux/actions';

function Board(state) {
  const handleUpdateListName = (listId, updatedName) => {
    const newLists = state.listsReducer.map(list => {
      if (list.id === listId) {
        return { ...list, name: updatedName };
      }
      return list;
    });
    state.updateLists(newLists);
  };

  const handleAddCard = addedCard => {
    state.updateCards([...state.cardsReducer, addedCard]);
  };

  const handleRemoveCard = cardId => {
    const newCards = state.cardsReducer.filter(({ id }) => id !== cardId);
    state.updateCards(newCards);

    const newComments = state.commentsReducer.filter(comment => comment.cardId !== cardId);
    state.updateComments(newComments);
  };

  const handleUpdateCardTitle = (cardId, updatedTitle) => {
    const newCards = state.cardsReducer.map(card => {
      if (card.id === cardId) {
        return { ...card, name: updatedTitle };
      }
      return card;
    });
    state.updateCards(newCards);
  };

  const handleAddDescription = (addedDescription, cardId) => {
    const newCards = state.cardsReducer.map(card => {
      if (card.id === cardId) {
        return { ...card, description: addedDescription };
      }
      return card;
    });
    state.updateCards(newCards);
  };

  const handleAddComment = addedComment => {
    state.updateComments([...state.commentsReducer, addedComment]);
  };

  const handleRemoveComment = commentId => {
    const newComments = state.commentsReducer.filter(({ id }) => id !== commentId);
    state.updateComments(newComments);
  };

  const handleUpdateComment = (commentId, updatedBody) => {
    const newComments = state.commentsReducer.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, body: updatedBody };
      }
      return comment;
    });
    state.updateComments(newComments);
  };

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(state.cardsReducer));
    localStorage.setItem('comments', JSON.stringify(state.commentsReducer));
    localStorage.setItem('lists', JSON.stringify(state.listsReducer));
    localStorage.setItem('author', JSON.stringify(state.authorReducer));
  }, [state.cardsReducer, state.commentsReducer, state.listsReducer, state.authorReducer]);
  return (
    <div>
      <div className={styles.container}>
        <Lists
          lists={state.listsReducer}
          cards={state.cardsReducer}
          comments={state.commentsReducer}
          author={state.authorReducer}
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
      {state.authorReducer === '' && <Login setAuthor={state.updateAuthor} />}
    </div>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  updateLists,
  updateCards,
  updateComments,
  updateAuthor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
