import React from 'react';
import List from "./List/List";


const Lists = (props) => {

    let listsElements =  props.dataLists.map((list) => {
        return <List key={list.id}
                     listId={list.id}
                     name={list.name}
                     dataCards={props.dataCards}
                     dataComments={props.dataComments}
                     handleAddCard={props.handleAddCard}
                     handleRemoveCard={props.handleRemoveCard}
                     handleUpdateListTitle={props.handleUpdateListTitle}
                     handleAddDescription={props.handleAddDescription}
                     handleAddComment={props.handleAddComment}
                     handleRemoveComment={props.handleRemoveComment}
                     handleUpdateComment={props.handleUpdateComment}
                     author={props.dataAuthor}
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