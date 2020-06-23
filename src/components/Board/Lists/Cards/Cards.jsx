import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import styles from './Cards.module.css';
import CardDetailWindow from './CardDetailWindow/CardDetailWindow';

const Cards = props => {
  const [visible, setVisible] = useState(false);

  const handleClosingWindow = () => {
    setVisible(false);
  };

  const handleOpenWindow = () => {
    setVisible(true);
  };

  const removeCard = cardId => {
    props.handleRemoveCard(cardId);
  };

  const newCards = props.cards.filter(card => card.listsID === props.idList);
  const cardsElements = newCards.map(card => {
    const thisCardComments = props.comments.filter(comment => comment.cardId === card.id);
    return (
      <div key={card.id} className={styles.container}>
        <Button onClick={() => removeCard(card.id)} className={styles.close} variant="link">
          X
        </Button>
        <ListGroup.Item onClick={handleOpenWindow}>
          <div>{card.name}</div>
          <div className={styles.comment}>Com {thisCardComments.length}</div>
        </ListGroup.Item>
        {visible && (
          <CardDetailWindow
            visible={visible}
            handleClosingWindow={handleClosingWindow}
            cardName={card.name}
            nameList={props.nameList}
            cardId={card.id}
            author={card.authorID}
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

export default Cards;
