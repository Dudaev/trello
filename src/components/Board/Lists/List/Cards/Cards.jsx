import React from 'react';
import MyCard from "./MyCard/MyCard";

const Cards = (props) => {

    const newCards = props.dataCards.filter((card) => card.listsID === props.idList);
    const cardsElements = newCards.map(function (card) {
        const Comments = props.dataComments.filter((com) => com.cardsID === card.id);
            return <MyCard key={card.id}
                           cardId={card.id}
                           name={card.name}
                           author={card.authorID}
                           CardDescription={card.description}
                           nameList={props.nameList}
                           comment={Comments}
                           dataComments={props.dataComments}
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