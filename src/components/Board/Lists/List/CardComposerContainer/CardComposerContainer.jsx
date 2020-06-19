import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const CardComposerContainer = (props) => {
    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false)

    function handleAddAndHide() {
        setVisible(false)
        let i = 0;
        let result = true;
        while (true) {
            for (let j = 0; j < props.dataCards.length; j++) {
                if (i === props.dataCards[j].id) {
                    result = false
                    break
                } else {
                    result = true
                }
            }
            if (result === true) {
                break
            }
            i++
        }

        props.addCardItem({
            id: i,
            authorID: 0,
            listsID: props.idList,
            name: title,
            description: "",
        })
        setTitle('')
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
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputGroup.Append>
                        <Button onClick={ () => handleAddAndHide() }
                            variant="outline-secondary">Add card</Button>
                    </InputGroup.Append>
                </InputGroup>

            }
        </div>
    );
};

export default CardComposerContainer;