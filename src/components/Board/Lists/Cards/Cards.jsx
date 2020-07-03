import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Cards.module.css';
import CardDetailWindow from './CardDetailWindow/CardDetailWindow.jsx';
import {connect} from "react-redux";
import {
  handleRemoveCard,
  handleRemoveCardComments,
  handleUpdateShowCardDetail,
} from "../../../../redux/actions";

const Cards = props => {

  const handleRemoveCardWithComments = cardId => {
    props.handleRemoveCard(cardId);
    props.handleRemoveCardComments(cardId);
  };

  const newCards = props.cards.filter(card => card.listId === props.listId);
  const cardsElements = newCards.map(card => {
    const thisCardComments = props.comments.filter(comment => comment.cardId === card.id);
    console.log(`card.id = ${card.id}`);
    return (
      <div key={card.id} className={styles.container}>
        <Button onClick={() => handleRemoveCardWithComments(card.id)} className={styles.close} variant="link">
          X
        </Button>
        <ListGroup.Item onClick={() => props.handleUpdateShowCardDetail(card.id)}>
          <div>{card.name}</div>
          <div className={styles.comment}>Com {thisCardComments.length}</div>
        </ListGroup.Item>
        {card.showCardDetail && (
          <CardDetailWindow
            visible={card.showCardDetail}
            handleUpdateShowCardDetail={props.handleUpdateShowCardDetail}
            cardName={card.name}
            nameList={props.nameList}
            cardId={card.id}
            author={card.authorId}
            cardDescription={card.description}
            thisCardComments={thisCardComments}
            comments={props.comments}
          />
        )}
      </div>
    );
  });
  return <div>{cardsElements}</div>;

};
Cards.propTypes = {
  handleRemoveCardComments: PropTypes.func,
  handleRemoveCard: PropTypes.func,
  cards: PropTypes.array,
  listId: PropTypes.number,
  comments: PropTypes.array,
  nameList: PropTypes.string,
  handleUpdateShowCardDetail: PropTypes.func,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { handleUpdateShowCardDetail, handleRemoveCard, handleRemoveCardComments })(Cards);