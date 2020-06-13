import React, {Component} from 'react';
import {Button, Card, Form, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import s from './Lists.module.css';
import {
    updateListTitleVisibleActionCreator,
    updateNewListVisibleActionCreator
} from "../../../BLL/store";

class Lists extends Component {

    showHideInputCard = (e, listName, cardVisible) => {
        e.preventDefault()
        let action = updateNewListVisibleActionCreator(!cardVisible,listName)
        this.props.dispatch(action)
    }

    showHideInputList = (e, listName, listVisible) => {
        e.preventDefault()
        let action = updateListTitleVisibleActionCreator(!listVisible,listName)
        if (listVisible) {}
        this.props.dispatch(action)
        console.log('showInputList click')
    }

    HideInputList = (e,b) => {
        e.preventDefault()
        let visible = false
        let action = updateListTitleVisibleActionCreator(visible,b)
        this.props.dispatch(action)
        console.log('1111')
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
                                <Card.Header >
                                    {
                                        !l.visibleInputList && <div onClick={ (e) => this.showHideInputList(e, l.name, l.visibleInputList) }>{l.name}</div>
                                    }
                                    {
                                        l.visibleInputList &&  <FormControl onBlur={(e) => this.showHideInputList(e, l.name, l.visibleInputList)} />
                                    }
                                </Card.Header>
                            <Form.Group className="mb-0" controlId="formGridState">
                                {cardsElements}
                                {
                                    !l.visible && <Button onClick={ (e) => this.showHideInputCard(e, l.name,l.visible) } variant="outline-secondary" size="md" block>
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
                                        <Button onClick={ (e) => this.showHideInputCard(e, l.name, l.visible)} variant="outline-secondary">Add card</Button>
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