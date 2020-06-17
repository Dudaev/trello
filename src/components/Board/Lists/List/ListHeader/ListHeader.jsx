import React, {useState} from 'react';
import {Button, Card, FormControl, InputGroup} from "react-bootstrap";

const ListHeader = (props) => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');


    const handleShowInput = () => {
        setVisible( true)
    }

    const handleHideInput = () => {
        setVisible(false)
        props.updateListTitle(props.idList, title)
    }

    return (
        <div>
            {
                !visible && <Card.Header onClick={ handleShowInput }>
                    <div>{props.name}</div>
                </Card.Header>
            }
            {
                visible && <InputGroup >
                    <FormControl
                        value={title}
                        placeholder="Enter list title"
                        aria-label="Enter list title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputGroup.Append>
                        <Button onClick={ handleHideInput } variant="outline-secondary">Save</Button>
                    </InputGroup.Append>
                </InputGroup>
            }

        </div>
    );

}

export default ListHeader;