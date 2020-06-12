import React, {Component} from 'react';
import {Button, Card, Form, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import s from './Lists.module.css';

class Lists extends Component {


    state = {
        buttonVisible: s.show,
        InputVisible: s.hide,
        visible: false,
    }

    hideButtonSwohInput = (e) => {
        e.preventDefault()
        this.setState({ visible: true })
    }
    swohButtonHideInput = (e) => {
        e.preventDefault()
        this.setState({ visible: false })
    }

    render() {
        const { visible } = this.state
        const { lists, cards, comments, author } = this.props.BoardPage

        console.log(lists[3].name)

    let listsElements =
        lists.map(function(lists) {
                let cardsElements =
                    lists.cards.map(function(cards) {
                        return <ListGroup.Item><div>{cards.name}</div><div className={s.comment}>Com {cards.numberOfComments}</div></ListGroup.Item>;
                    });
                return <div>
                    <Card style={{width: '18rem'}}>
                        <Card.Header >{lists.name}</Card.Header>
                        <Form.Group className="mb-0" controlId="formGridState">
                            {cardsElements}
                            {
                                !visible && <Button variant="outline-secondary" size="md" block>
                                    Add card
                                </Button>
                            }
                        </Form.Group >
                        {
                            visible && <InputGroup>
                                <FormControl
                                    placeholder="Enter a title for this card"
                                    aria-label="Enter a title for this card"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">Add card</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        }
                    </Card>
                </div>;
        });
        return (
            <div>
                <div className={s.container} >
                    {listsElements}
                    {/*                !visible && <Button onClick={ this.hideButtonSwohInput } variant="outline-secondary" size="md" block>*/}
                    {/*                    <Button onClick={ this.swohButtonHideInput } variant="outline-secondary">Add card</Button>*/}
                </div>
            </div>
        );
    }
}

export default Lists;