import React, {Component} from 'react';
import {Button, Col, Form, FormControl, InputGroup, Modal} from "react-bootstrap";

class CardDetailWindow extends Component {

    render() {
        const { visible, handleClosingWindow } = this.props

        return (
            <div>
                <Modal show={visible} onHide={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Card name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>CardsName</div>
                        <div>in list ListName</div>
                        <div>Author AuthorName</div>
                        <div>Description</div>
                        <InputGroup>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <Button variant="primary" >
                            Save
                        </Button>
                        <div>Activity</div>
                        <InputGroup>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <Button variant="primary" >
                            Save
                        </Button>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={ handleClosingWindow } variant="secondary" >
                            Close
                        </Button>
                        <Button variant="primary" >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CardDetailWindow;