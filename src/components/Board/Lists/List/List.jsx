import React from 'react';
import {Card} from "react-bootstrap";
import CardComposerContainer from "./CardComposerContainer/CardComposerContainer";
import ListHeader from "./ListHeader/ListHeader";
import Cards from "./Cards/Cards";

function List(props) {
    return (
        <div>
            <Card style={{width: '18rem'}}>
                <ListHeader name={props.name} updateListTitle={props.updateListTitle} idList={props.listId}/>
                <Cards dataCards={props.dataCards}
                       dataComments={props.dataComments}
                       idList={props.listId}
                       removeCard={props.removeCard}
                       nameList={props.name}
                       handleAddDescription={props.handleAddDescription}
                       handleAddComment={props.handleAddComment}
                       handleRemoveComment={props.handleRemoveComment}
                       handleUpdateComment={props.handleUpdateComment}
                />
                <CardComposerContainer addCardItem={props.addCardItem}
                                       idList={props.listId}
                                       dataCards={props.dataCards}
                />
            </Card>
        </div>
    );
}

export default List;