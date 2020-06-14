import React from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const CardComposerContainer = (props) => {
    return (
            <InputGroup>
                <FormControl
                    placeholder="Enter a title for this card"
                    aria-label="Enter a title for this card"
                />
                <InputGroup.Append>
                    <Button onClick={ props.onVisibleChange } variant="outline-secondary">Add card</Button>
                </InputGroup.Append>
            </InputGroup>
    );
};

export default CardComposerContainer;