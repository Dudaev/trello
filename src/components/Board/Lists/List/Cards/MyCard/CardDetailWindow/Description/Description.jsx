import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const Description = (props) => {
    const [description, setDescription] = useState(props.cardDescription)
    const [visible, setVisible] = useState(false)

    const handleAddDescription = () => {
        setVisible(false)
        props.handleAddDescription(description,props.cardId)
    }

    return (
        <div>
            {
                !visible && <div>

                    <div>{props.cardDescription}</div>
                    <Button onClick={ () => setVisible(true) } variant="link">Edit</Button>
                </div>

            }
            {
                visible && <div>
                    <InputGroup>
                        <FormControl value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" aria-label="With textarea"/>
                    </InputGroup>
                    <Button onClick={
                        handleAddDescription
                    } variant="primary">
                        Save
                    </Button>
                </div>
            }


        </div>
    );
};

export default Description;