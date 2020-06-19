import React from 'react';
import {Card} from "react-bootstrap";
import CardComposerContainer from "./CardComposerContainer/CardComposerContainer";
import ListHeader from "./ListHeader/ListHeader";
import Cards from "./Cards/Cards";

function List(props) {
    return (
        <div>
            <Card style={{width: '18rem'}}>
                <ListHeader name={props.name} handleUpdateListTitle={props.handleUpdateListTitle} idList={props.listId}/>
                <Cards dataCards={props.dataCards}
                       dataComments={props.dataComments}
                       idList={props.listId}
                       handleRemoveCard={props.handleRemoveCard}
                       nameList={props.name}
                       handleAddDescription={props.handleAddDescription}
                       handleAddComment={props.handleAddComment}
                       handleRemoveComment={props.handleRemoveComment}
                       handleUpdateComment={props.handleUpdateComment}
                       handleUpdateCardTitle={props.handleUpdateCardTitle}
                />
                <CardComposerContainer handleAddCard={props.handleAddCard}
                                       idList={props.listId}
                                       dataCards={props.dataCards}
                                       author={props.author}
                />
            </Card>
        </div>
    );
}

export default List;