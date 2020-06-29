import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Cards.module.css';
import CardDetailWindow from './CardDetailWindow/CardDetailWindow.jsx';

const Cards = props => {

  const handleUpdateShowCardDetail = (cardId) => {
    props.handleUpdateShowCardDetail(cardId)
  }

  const removeCard = cardId => {
    props.handleRemoveCard(cardId);
  };

  const newCards = props.cards.filter(card => card.listId === props.listId);
  const cardsElements = newCards.map(card => {
    const thisCardComments = props.comments.filter(comment => comment.cardId === card.id);
    console.log('card.id = ' + card.id)
    return (
      <div key={card.id} className={styles.container}>
        <Button onClick={() => removeCard(card.id)} className={styles.close} variant="link">
          X
        </Button>
        <ListGroup.Item onClick={() => handleUpdateShowCardDetail(card.id)}>
          <div>{card.name}</div>
          <div className={styles.comment}>Com {thisCardComments.length}</div>
        </ListGroup.Item>
        {card.showCardDetail && (
          <CardDetailWindow
            visible={card.showCardDetail}
            handleUpdateShowCardDetail={handleUpdateShowCardDetail}
            cardName={card.name}
            nameList={props.nameList}
            cardId={card.id}
            author={card.authorId}
            handleAddDescription={props.handleAddDescription}
            cardDescription={card.description}
            thisCardComments={thisCardComments}
            comments={props.comments}
            handleAddComment={props.handleAddComment}
            handleRemoveComment={props.handleRemoveComment}
            handleUpdateComment={props.handleUpdateComment}
            handleUpdateCardTitle={props.handleUpdateCardTitle}
          />
        )}
      </div>
    );
  });
  return <div>{cardsElements}</div>;

};
Cards.propTypes = {
  handleRemoveCard: PropTypes.func,
  cards: PropTypes.array,
  listId: PropTypes.number,
  comments: PropTypes.array,
  nameList: PropTypes.string,
  handleAddDescription: PropTypes.func,
  handleAddComment: PropTypes.func,
  handleRemoveComment: PropTypes.func,
  handleUpdateComment: PropTypes.func,
  handleUpdateCardTitle: PropTypes.func,
  handleUpdateShowCardDetail: PropTypes.func,
};
export default Cards;
