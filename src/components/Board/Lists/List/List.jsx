import React from 'react';
import {Card} from "react-bootstrap";
import MyCard from "./MyCard/MyCard";
import CardComposerContainer from "./CardComposerContainer/CardComposerContainer";
import ListHeader from "./ListHeader/ListHeader";

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
        let cardsElements =
            this.props.cards.map(function (c) {
                return <MyCard key={c.id} name={c.name} comment={c.comments.length}/>
            });
        return (
            <div>
                <Card style={{width: '18rem'}}>
                    <ListHeader name={this.props.name}/>
                    {cardsElements}
                    <CardComposerContainer handleShowInput={this.handleShowInput} handleHideInput={this.handleHideInput} visble={visible}/>

                </Card>
            </div>
        );
    }
}

export default List;