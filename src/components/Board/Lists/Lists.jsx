import React from 'react';
import List from "./List/List";


const Lists = (props) => {

    let listsElements =  props.lists.map((list) => {
        return <List key={list.id}
                     listId={list.id}
                     name={list.name}
                     cards={props.cards}
                     comments={props.comments}
                     author={props.author}
                     handleAddCard={props.handleAddCard}
                     handleRemoveCard={props.handleRemoveCard}
                     handleUpdateListTitle={props.handleUpdateListTitle}
                     handleAddDescription={props.handleAddDescription}
                     handleAddComment={props.handleAddComment}
                     handleRemoveComment={props.handleRemoveComment}
                     handleUpdateComment={props.handleUpdateComment}
                     handleUpdateCardTitle={props.handleUpdateCardTitle}
        />
    });
    return (
        <>
            {listsElements}
        </>

    );
};

export default Lists;