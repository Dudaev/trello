import React, {Component} from 'react';
import {Button, Card, Form, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import s from './Lists.module.css';
import {
    updateNewListVisibleActionCreator
} from "../../../BLL/store";

class Lists extends Component {
    state = {
    }

    hideButtonShowInput = (e,b) => {
        e.preventDefault()
        let visible = true
        let action = updateNewListVisibleActionCreator(visible,b)
        this.props.dispatch(action)
    }
    showButtonHideInput = (e,b) => {
        e.preventDefault()
        let visible = false
        let action = updateNewListVisibleActionCreator(visible,b)
        this.props.dispatch(action)
    }

    showInputList = (e,b) => {
        e.preventDefault()
        let visible = false
        let action = updateNewListVisibleActionCreator(visible,b)
        this.props.dispatch(action)
    }


    render() {
        const {lists} = this.props.BoardPage
        let listsElements =
            lists.map((l) => {
                    let cardsElements =
                        l.cards.map(function(c) {
                            return <ListGroup.Item><div>{c.name}</div><div className={s.comment}>Com {c.comments.length} </div></ListGroup.Item>;
                        });
                    return <div>
                        <Card style={{width: '18rem'}}>
                                <Card.Header onClick={ (e) => this.showInputList(e, l.name) }>
                                    {
                                        !l.visibleInputList && l.name
                                    }
                                    {
                                        l.visibleInputList && <FormControl></FormControl>
                                    }
                                </Card.Header>
                            <Form.Group className="mb-0" controlId="formGridState">
                                {cardsElements}
                                {
                                    !l.visible && <Button  onClick={ (e) => this.hideButtonShowInput(e, l.name) } variant="outline-secondary" size="md" block>
                                        Add card
                                    </Button>
                                }
                            </Form.Group >
                            {
                                l.visible && <InputGroup>
                                    <FormControl
                                        placeholder="Enter a title for this card"
                                        aria-label="Enter a title for this card"
                                    />
                                    <InputGroup.Append>
                                        <Button onClick={ (e) => this.showButtonHideInput(e, l.name)} variant="outline-secondary">Add card</Button>
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
                </div>
            </div>
        );
    }
}

export default Lists;