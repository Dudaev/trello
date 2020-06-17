import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const CardComposerContainer = (props) => {
    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false)

    function handleAddAndHide(newItem) {
        setVisible(false)
        props.addCardItem(newItem)
    }
    return (
        <div>
            {
                !visible && <Button onClick={ () => setVisible(true) } variant="outline-secondary" size="md" block>
                    Add card
                </Button>
            }

            {
                visible && <InputGroup>
                    <FormControl
                        value={title}
                        placeholder="Enter list title"
                        aria-label="Enter list title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputGroup.Append>
                        <Button onClick={ () => handleAddAndHide({
                            id: props.dataCards.length,
                            authorID: 0,
                            listsID: props.idList,
                            name: title,
                            description: "",
                        }) }
                            variant="outline-secondary">Add card</Button>
                    </InputGroup.Append>
                </InputGroup>

            }
        </div>
    );
};

export default CardComposerContainer;