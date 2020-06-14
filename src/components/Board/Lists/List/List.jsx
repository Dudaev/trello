import React from 'react';
import {Button, Card} from "react-bootstrap";
import MyCard from "./MyCard/MyCard";
import CardComposerContainer from "./CardComposerContainer/CardComposerContainer";
import ListHeader from "./ListHeader/ListHeader";

class List extends React.Component {
    state = {visible: false}

    handleShowInput= (e) => {
        this.setState({visible: true})
    }

    handleHideInput= (e) => {
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
                    {
                        !visible && <Button onClick={ this.handleShowInput } variant="outline-secondary" size="md" block>
                            Add card
                        </Button>
                    }

                    {
                        visible && <CardComposerContainer onVisibleChange={this.handleHideInput}/>

                    }

                </Card>
            </div>
        );
    }
}

export default List;