import React from 'react';
import MyCard from "./MyCard/MyCard";

const Cards = (props) => {

    const newCards = props.dataCards.filter((elem) => elem.listsID === props.idList);

    const cardsElements = newCards.map(function (c) {
        const Comments = props.dataComments.filter((com) => com.cardsID === c.id);
            return <MyCard key={c.id} name={c.name} comment={Comments.length}/>
        });
    return (
        <div>
            {cardsElements}
        </div>
    );
};

export default Cards;