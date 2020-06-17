import React from 'react';
import {Card} from "react-bootstrap";
import CardComposerContainer from "./CardComposerContainer/CardComposerContainer";
import ListHeader from "./ListHeader/ListHeader";
import Cards from "./Cards/Cards";

class List extends React.Component {

    render() {
        return (
            <div>
                <Card style={{width: '18rem'}}>
                    <ListHeader name={this.props.name}/>
                    <Cards data={this.props.cards}/>
                    <CardComposerContainer handleShowInput={this.handleShowInput} handleHideInput={this.handleHideInput} />
                </Card>
            </div>
        );
    }
}

export default List;