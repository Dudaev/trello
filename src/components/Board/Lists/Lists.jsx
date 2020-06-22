import React from 'react';
import List from "./List/List";


const Lists = (props) => {

    let listsElements =  props.lists.map((list) => {
        return <List key={list.id}
                     listId={list.id}
                     name={list.name}
                     dataCards={props.cards}
                     dataComments={props.comments}
                     handleAddCard={props.handleAddCard}
                     handleRemoveCard={props.handleRemoveCard}
                     handleUpdateListTitle={props.handleUpdateListTitle}
                     handleAddDescription={props.handleAddDescription}
                     handleAddComment={props.handleAddComment}
                     handleRemoveComment={props.handleRemoveComment}
                     handleUpdateComment={props.handleUpdateComment}
                     author={props.author}
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