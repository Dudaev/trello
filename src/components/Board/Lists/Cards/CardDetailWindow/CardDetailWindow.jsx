import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Comment from './Comment/Comment.jsx';
import Description from './Description/Description.jsx';
import CardHeader from './CardHeader/CardHeader.jsx';

function CardDetailWindow(props) {
  const [comment, setComment] = useState('');

  const generateId = () => {
    let id = 0;
    let result = true;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      for (let i = 0; i < props.comments.length; i += 1) {
        if (id === props.comments[i].id) {
          result = false;
          break;
        } else {
          result = true;
        }
      }
      if (result === true) {
        break;
      }
      id += 1;
    }
    return id;
  };

  const handleAddComment = () => {
    props.handleAddComment({
      id: generateId(),
      authorId: 0,
      cardId: props.cardId,
      body: comment,
    });
    setComment('');
  };
  // debugger
  const commentsList = props.thisCardComments.map(comments => (
    <Comment
      key={comments.id}
      id={comments.id}
      body={comments.body}
      handleRemoveComment={props.handleRemoveComment}
      handleUpdateComment={props.handleUpdateComment}
      author={props.author}
    />
  ));

  return (
    <div>
      <Modal show={props.visible}>
        <Modal.Header>
          <CardHeader
            title={props.cardName}
            cardId={props.cardId}
            handleUpdateCardTitle={props.handleUpdateCardTitle}
          />
        </Modal.Header>

        <Modal.Body>
          <div>
            <b>in list</b> {props.nameList}
          </div>
          <div>
            <b>Author</b> {props.author}
          </div>
          <div>
            <b>Description</b>
          </div>

          <Description
            cardId={props.cardId}
            nameList={props.nameList}
            cardDescription={props.cardDescription}
            handleAddDescription={props.handleAddDescription}
          />

          <div>Activity</div>
          <InputGroup>
            <FormControl
              value={comment}
              onChange={e => setComment(e.target.value)}
              as="textarea"
              aria-label="With textarea"
            />
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
        </Modal.Footer>
      </Modal>
    </div>
  );
}

CardDetailWindow.propTypes = {
  comments: PropTypes.array,
  handleAddComment: PropTypes.func,
  cardId: PropTypes.number,
  thisCardComments: PropTypes.array,
  author: PropTypes.string,
  visible: PropTypes.bool,
  cardName: PropTypes.string,
  nameList: PropTypes.string,
  cardDescription: PropTypes.string,
  handleClosingWindow: PropTypes.func,
  handleAddDescription: PropTypes.func,
  handleRemoveComment: PropTypes.func,
  handleUpdateComment: PropTypes.func,
  handleUpdateCardTitle: PropTypes.func,
};

export default CardDetailWindow;
