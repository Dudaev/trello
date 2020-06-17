import React from 'react';
import MyCard from "./MyCard/MyCard";

const Cards = (props) => {
    let cardsElements =
        props.data.map(function (c) {
            return <MyCard key={c.id} name={c.name} comment={c.comments.length}/>
        });
    return (
        <div>
            {cardsElements}
        </div>
    );
};

export default Cards;