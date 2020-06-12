import React, {Component} from 'react';
import {Button, Card, Form, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import s from './Lists.module.css';

class Lists extends Component {
    state = {
        buttonVisible: s.show,
        InputVisible: s.hide
    }
    hideButtonSwohInput = (e) => {
        e.preventDefault()
        this.setState({ buttonVisible: s.hide })
        this.setState({ InputVisible: s.show })
    }
    swohButtonHideInput = (e) => {
        e.preventDefault()
        this.setState({ buttonVisible: s.show })
        this.setState({ InputVisible: s.hide })
    }
    render() {
        const { buttonVisible, InputVisible } = this.state
        return (
            <div>
                <div className={s.container} >
                    <div>
                        <Card style={{width: '18rem'}}>
                            <Card.Header >TODO</Card.Header>
                            <Form.Group className="mb-0" controlId="formGridState">
                                <ListGroup.Item>Card 1</ListGroup.Item>
                                <ListGroup.Item>Card 2</ListGroup.Item>
                                <ListGroup.Item>Card 3</ListGroup.Item>
                                <div>
                                    <Button className={buttonVisible} onClick={ this.hideButtonSwohInput } variant="outline-secondary" size="md" block>
                                        Add card
                                    </Button>
                                </div>
                            </Form.Group >
                            <div className={InputVisible}>
                                <InputGroup>
                                    <FormControl
                                        placeholder="Enter a title for this card"
                                        aria-label="Enter a title for this card"
                                    />
                                    <InputGroup.Append>
                                        <Button onClick={ this.swohButtonHideInput } variant="outline-secondary">Add card</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists;