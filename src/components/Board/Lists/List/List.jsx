import React from 'react';
import {Card} from "react-bootstrap";
import CardComposerContainer from "./CardComposerContainer/CardComposerContainer";
import ListHeader from "./ListHeader/ListHeader";
import Cards from "./Cards/Cards";

function List(props) {
    return (
        <div>
            <Card style={{width: '18rem'}}>
                <ListHeader name={props.name}/>
                <Cards dataCards={props.dataCards} dataComments={props.dataComments} idList={props.listId}/>
                <CardComposerContainer/>
            </Card>
        </div>
    );
}

export default List;