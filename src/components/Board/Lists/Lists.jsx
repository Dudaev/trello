import React from 'react';
import List from "./List/List";


const Lists = (props) => {

    let listsElements =  props.dataLists.map((l) => {
        return <List key={l.id}
                     listId={l.id}
                     name={l.name}
                     dataCards={props.dataCards}
                     dataComments={props.dataComments}
                     addCardItem={props.addCardItem}
                     removeCard={props.removeCard}
                     updateListTitle={props.updateListTitle}
                     handleAddDescription={props.handleAddDescription}
                     handleAddComment={props.handleAddComment}
                     handleRemoveComment={props.handleRemoveComment}
                     handleUpdateComment={props.handleUpdateComment}
                     author={props.author}
        />
    });
    return (
        <>
            {listsElements}
        </>

    );
};

export default Lists;