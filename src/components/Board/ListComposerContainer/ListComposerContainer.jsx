import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import s from "./ListComposerContainer.module.css"

const ListComposerContainer = (props) => {
    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false);

    function addListItem(newItem) {
        setVisible(false)
        props.addListItem(newItem)
    }

    return (
        <div className={s.composer}>
            {
                !visible && <Button onClick={ () => setVisible(true) } variant="outline-secondary" size="md" block>
                    Add list
                </Button>
            }

            {
                visible && <InputGroup>
                    <FormControl value={title}
                                 placeholder="Enter list title"
                                 aria-label="Enter list title"
                                 onChange={(e) => {setTitle(e.target.value)}}
                    />
                    <InputGroup.Append>
                        <Button onClick={ () => addListItem({id: props.id, name: title, cards: []}) } variant="outline-secondary">Add list</Button>
                    </InputGroup.Append>
                </InputGroup>

            }
        </div>
    );
};

export default ListComposerContainer;