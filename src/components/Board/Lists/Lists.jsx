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
                     removeCard={props.removeCard}/>
    });
    return (
        <>
            {listsElements}
        </>

    );
};

export default Lists;