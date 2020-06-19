import React, {useState} from 'react';
import {Button, FormControl, InputGroup, Modal} from "react-bootstrap";
import Comment from "./Comment/Comment";
import Description from "./Description/Description";

function CardDetailWindow(props) {
    const [comment, setComment] = useState('')

    const handleAddComment = () => {
        let i = 0;
        let result = true;
        while (true) {
            for (let j = 0; j < props.dataComments.length; j++) {
                if (i === props.dataComments[j].id) {
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
        props.handleAddComment({
            id: i,
            authorID: 0,
            cardsID: props.cardId,
            body: comment
        })
        setComment('')
    }
    const commentsList =  props.comments.map((comments) => {
        return <Comment key={comments.id}
                        id={comments.id}
                        body={comments.body}
                        handleRemoveComment={props.handleRemoveComment}
                        handleUpdateComment={ props.handleUpdateComment}
        />
    })
    
    return (
        <div>
            <Modal show={props.visible}>
                <Modal.Header>
                    <Modal.Title>{props.cardName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div><b>in list</b> {props.nameList}</div>
                    <div><b>Author</b> AuthorName</div>
                    <div><b>Description</b></div>

                    <Description cardId={props.cardId}
                                 nameList={props.nameList}
                                 CardDescription={props.CardDescription}
                                 handleAddDescription={props.handleAddDescription}/>

                    <div>Activity</div>
                    <InputGroup>
                        <FormControl value={comment} onChange={(e) => setComment(e.target.value)} as="textarea" aria-label="With textarea"/>
                    </InputGroup>
                    <Button onClick={handleAddComment} variant="primary">
                        Save
                    </Button>

                    {commentsList}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.handleClosingWindow} variant="secondary">
                        Close
                    </Button>

                    <Button variant="primary">
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CardDetailWindow;