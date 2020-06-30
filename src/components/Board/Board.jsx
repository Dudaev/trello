import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './Board.module.css';
import Lists from './Lists/Lists.jsx';
import Login from './Login/Login.jsx';
import {
  handleAddCard,
  handleAddComment,
  handleAddDescription,
  handleRemoveCard,
  handleRemoveCardComments,
  handleRemoveComment,
  handleUpdateCardTitle,
  handleUpdateComment,
  handleUpdateListName,
  handleUpdateShowCardDetail, updateAuthor,
} from '../../redux/actions';
import PropTypes from 'prop-types';

function Board(props) {

  const handleRemoveCardWithComments = cardId => {
    props.handleRemoveCard(cardId);
    props.handleRemoveCardComments(cardId);
  };

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(props.state.cardsReducer));
    localStorage.setItem('comments', JSON.stringify(props.state.commentsReducer));
    localStorage.setItem('lists', JSON.stringify(props.state.listsReducer));
    localStorage.setItem('author', JSON.stringify(props.state.authorReducer));
  }, [props.state.cardsReducer, props.state.commentsReducer, props.state.listsReducer, props.state.authorReducer]);
  return (
    <div>
      <div className={styles.container}>
        <Lists
          lists={props.state.listsReducer}
          cards={props.state.cardsReducer}
          comments={props.state.commentsReducer}
          author={props.state.authorReducer}
          handleUpdateListName={(listId, updatedName) => props.handleUpdateListName(listId, updatedName)}
          handleAddCard={addedCard => props.handleAddCard(addedCard)}
          handleRemoveCard={handleRemoveCardWithComments}
          handleUpdateCardTitle={(cardId, updatedTitle) => props.handleUpdateCardTitle(cardId, updatedTitle)}
          handleUpdateShowCardDetail={cardId => props.handleUpdateShowCardDetail(cardId)}
          handleAddDescription={(addedDescription, cardId) => props.handleAddDescription(addedDescription, cardId)}
          handleAddComment={addedComment => props.handleAddComment(addedComment)}
          handleRemoveComment={commentId => props.handleRemoveComment(commentId)}
          handleUpdateComment={(commentId, updatedBody) => props.handleUpdateComment(commentId, updatedBody)}
        />
      </div>
      {props.state.authorReducer === '' && <Login setAuthor={(name) => props.updateAuthor(name)} />}
    </div>
  );
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  updateAuthor: (name) => {
    dispatch(updateAuthor(name));
  },
  handleUpdateListName: (listId, updatedName) => {
    dispatch(handleUpdateListName(listId, updatedName));
  },
  handleAddCard: addedCard => {
    dispatch(handleAddCard(addedCard));
  },
  handleRemoveCard: cardId => {
    dispatch(handleRemoveCard(cardId));
  },
  handleRemoveCardComments: cardId => {
    dispatch(handleRemoveCardComments(cardId));
  },
  handleUpdateShowCardDetail: cardId => {
    dispatch(handleUpdateShowCardDetail(cardId));
  },
  handleUpdateCardTitle: (cardId, updatedTitle) => {
    dispatch(handleUpdateCardTitle(cardId, updatedTitle));
  },
  handleAddDescription: (addedDescription, cardId) => {
    dispatch(handleAddDescription(addedDescription, cardId));
  },
  handleAddComment: addedComment => {
    dispatch(handleAddComment(addedComment));
  },
  handleRemoveComment: commentId => {
    dispatch(handleRemoveComment(commentId));
  },
  handleUpdateComment: (commentId, updatedBody) => {
    dispatch(handleUpdateComment(commentId, updatedBody));
  },
});

Board.propTypes = {
  state: PropTypes.object,
  updateAuthor: PropTypes.func,
  handleUpdateListName: PropTypes.func,
  handleAddCard: PropTypes.func,
  handleRemoveCard: PropTypes.func,
  handleRemoveCardComments: PropTypes.func,
  handleUpdateShowCardDetail: PropTypes.func,
  handleUpdateCardTitle: PropTypes.func,
  handleAddDescription: PropTypes.func,
  handleAddComment: PropTypes.func,
  handleRemoveComment: PropTypes.func,
  handleUpdateComment: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
