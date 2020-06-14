import React from 'react';
import s from "../MyCard/MyCards.module.css";
import {ListGroup} from "react-bootstrap";

const MyCard = (props) => {
    const name = props.name
    const comment = props.comment
    return (
        <div>
            <ListGroup.Item>
                <div>{name}</div>
                <div className={s.comment}>Com {comment}</div>
            </ListGroup.Item>
        </div>
    );
};

export default MyCard;