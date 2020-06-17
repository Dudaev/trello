import React from 'react';
import List from "./List/List";


const Lists = (props) => {

    let listsElements =  props.data.map((l) => {
        return <List key={l.id} name={l.name} cards={l.cards}/>
    });
    return (
        <>
            {listsElements}
        </>

    );
};

export default Lists;