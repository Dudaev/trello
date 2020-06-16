import React from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const CardComposerContainer = (props) => {
    const visible = props.visble
    return (
        <div>
            {
                !visible && <Button onClick={ props.handleShowInput } variant="outline-secondary" size="md" block>
                    Add card
                </Button>
            }

            {
                visible &&             <InputGroup>
                    <FormControl
                        placeholder="Enter a title for this card"
                        aria-label="Enter a title for this card"
                    />
                    <InputGroup.Append>
                        <Button onClick={ props.handleHideInput } variant="outline-secondary">Add card</Button>
                    </InputGroup.Append>
                </InputGroup>

            }
        </div>
    );
};

export default CardComposerContainer;