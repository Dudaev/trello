import React, {Component} from 'react';
import {Button, Col, Form, Modal} from "react-bootstrap";

class Login extends Component {
    state = {
        visible: true,
    }
    handleClosingWindow = (e) => {
        e.preventDefault()
        this.setState({ visible: false })
    }
    render() {
        const { visible } = this.state
        return (
            <div>
                <Modal show={visible} >
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
                        <Button onClick={ this.handleClosingWindow } variant="secondary" >
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

export default Login;