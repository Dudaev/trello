import React, {Component} from 'react';
import {Button, Col, Form, Modal} from "react-bootstrap";

class Popup extends Component {
    state = {
        visible: false,
    }
    handleReadMoreClck = (e) => {
        e.preventDefault()
        this.setState({ visible: false })
    }
    render() {
        const { visible } = this.state
        return (
            <div>
                <Modal show={visible} onHide={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter your name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control type="text" placeholder="name" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={ this.handleReadMoreClck } variant="secondary" >
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

export default Popup;