import React from 'react';
import {Card} from "react-bootstrap";
import CardComposerContainer from "./CardComposerContainer/CardComposerContainer";
import ListHeader from "./ListHeader/ListHeader";
import Cards from "./Cards/Cards";

class List extends React.Component {
    state = {visible: false}

    handleShowInput= () => {
        this.setState({visible: true})
    }

    handleHideInput= () => {
        this.setState({visible: false})
    }

    render() {
        const { visible } = this.state
        return (
            <div>
                <Card style={{width: '18rem'}}>
                    <ListHeader name={this.props.name}/>
                    <Cards data={this.props.cards}/>
                    <CardComposerContainer handleShowInput={this.handleShowInput} handleHideInput={this.handleHideInput} visble={visible}/>
                </Card>
            </div>
        );
    }
}

export default List;