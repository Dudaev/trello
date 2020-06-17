import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const CardComposerContainer = () => {
    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false)

    function handleAddAndHide() {
        setVisible(false)
        // Вызово колбека для добавления карточки
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
                        placeholder="Enter a title for this card"
                        aria-label="Enter a title for this card"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputGroup.Append>
                        <Button onClick={ handleAddAndHide } variant="outline-secondary">Add card</Button>
                    </InputGroup.Append>
                </InputGroup>

            }
        </div>
    );
};

export default CardComposerContainer;