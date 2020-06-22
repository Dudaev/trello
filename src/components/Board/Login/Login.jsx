import React, {useState} from 'react';
import {Button, Col, Form, Modal} from "react-bootstrap";

const Login = (props) => {
    const [visible, setVisible] = useState(true);
    const [name, setName] = useState(props.author);

    const handleClosingWindow = () => {
        setVisible(false )
    }
    const setNewAuthor = () => {
        props.setAuthor(name)
        setVisible(false )
    }

        return (
            <div>
                <Modal show={visible} >
                    <Modal.Header>
                        <Modal.Title>Enter your name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    value={name}
                                    type="text"
                                    placeholder="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={ handleClosingWindow } variant="secondary" >
                            Close
                        </Button>
                        <Button onClick={setNewAuthor} variant="primary" >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }


export default Login;