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

        console.log(lists[0].name)

        let cardsElements0 =
            cards.map(function(cards) {
                if(cards.listsID === 0)
                return <ListGroup.Item><div>{cards.name}</div><div className={s.comment}>Com {cards.numberOfComments}</div></ListGroup.Item>;
            });
        let cardsElements1 =
            cards.map(function(cards) {
                if(cards.listsID === 1)
                    return <ListGroup.Item><div>{cards.name}</div><div className={s.comment}>Com {cards.numberOfComments}</div></ListGroup.Item>;
            });
        let cardsElements2 =
            cards.map(function(cards) {
                if(cards.listsID === 2)
                    return <ListGroup.Item><div>{cards.name}</div><div className={s.comment}>Com {cards.numberOfComments}</div></ListGroup.Item>;
            });
        let cardsElements3 =
            cards.map(function(cards) {
                if(cards.listsID === 3)
                    return <ListGroup.Item><div>{cards.name}</div><div className={s.comment}>Com {cards.numberOfComments}</div></ListGroup.Item>;
            });

        return (
            <div>
                <div className={s.container} >
                    <div>
                    <Card style={{width: '18rem'}}>
                        <Card.Header >{lists[0].name}</Card.Header>
                        <Form.Group className="mb-0" controlId="formGridState">
                            {cardsElements0}
                            {
                                !visible && <Button onClick={ this.hideButtonSwohInput } variant="outline-secondary" size="md" block>
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
                                    <Button onClick={ this.swohButtonHideInput } variant="outline-secondary">Add card</Button>
                                </InputGroup.Append>
                            </InputGroup>

                        }

                    </Card>
                </div>
                    <div>
                        <Card style={{width: '18rem'}}>
                            <Card.Header >{lists[1].name}</Card.Header>
                            <Form.Group className="mb-0" controlId="formGridState">
                                {cardsElements1}
                                {
                                    !visible && <Button onClick={ this.hideButtonSwohInput } variant="outline-secondary" size="md" block>
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
                                        <Button onClick={ this.swohButtonHideInput } variant="outline-secondary">Add card</Button>
                                    </InputGroup.Append>
                                </InputGroup>

                            }

                        </Card>
                    </div>
                    <div>
                        <Card style={{width: '18rem'}}>
                            <Card.Header >{lists[2].name}</Card.Header>
                            <Form.Group className="mb-0" controlId="formGridState">
                                {cardsElements2}
                                {
                                    !visible && <Button onClick={ this.hideButtonSwohInput } variant="outline-secondary" size="md" block>
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
                                        <Button onClick={ this.swohButtonHideInput } variant="outline-secondary">Add card</Button>
                                    </InputGroup.Append>
                                </InputGroup>

                            }

                        </Card>
                    </div>
                    <div>
                        <Card style={{width: '18rem'}}>
                            <Card.Header >{lists[3].name}</Card.Header>
                            <Form.Group className="mb-0" controlId="formGridState">
                                {cardsElements3}
                                {
                                    !visible && <Button onClick={ this.hideButtonSwohInput } variant="outline-secondary" size="md" block>
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
                                        <Button onClick={ this.swohButtonHideInput } variant="outline-secondary">Add card</Button>
                                    </InputGroup.Append>
                                </InputGroup>

                            }

                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists;