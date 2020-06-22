import React from 'react';
import MyCard from "./MyCard/MyCard";

const Cards = (props) => {

    const newCards = props.cards.filter((card) => card.listsID === props.idList);
    const cardsElements = newCards.map(function (card) {
        const thisCardComments = props.comments.filter((comment) => comment.cardsId === card.id);
            return <MyCard key={card.id}
                           cardId={card.id}
                           name={card.name}
                           author={card.authorID}
                           cardDescription={card.description}
                           nameList={props.nameList}
                           thisCardComments={thisCardComments}
                           comments={props.comments}
                           handleRemoveCard={props.handleRemoveCard}
                           handleAddDescription={props.handleAddDescription}
                           handleAddComment={props.handleAddComment}
                           handleRemoveComment={props.handleRemoveComment}
                           handleUpdateComment={props.handleUpdateComment}
                           handleUpdateCardTitle={props.handleUpdateCardTitle}
            />
        });
    return (
        <div>
            {cardsElements}
        </div>
    );
};

export default Cards;