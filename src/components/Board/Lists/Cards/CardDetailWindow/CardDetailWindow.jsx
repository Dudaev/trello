import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment/Comment.jsx';
import Description from './Description/Description.jsx';
import CardHeader from './CardHeader/CardHeader.jsx';
import { handleAddComment } from '../../../../../redux/actions';

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

  const commentsList = props.thisCardComments.map(comments => (
    <Comment key={comments.id} id={comments.id} body={comments.body} author={props.author} />
  ));

  return (
    <div>
      <Modal show={props.visible}>
        <Modal.Header>
          <CardHeader title={props.cardName} cardId={props.cardId} />
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

          <Description cardId={props.cardId} nameList={props.nameList} cardDescription={props.cardDescription} />

          <div>Activity</div>
          <InputGroup>
            <FormControl
              value={comment}
              onChange={e => setComment(e.target.value)}
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>

          <Button
            onClick={() => {
              props.handleAddComment({
                id: generateId(),
                authorId: 0,
                cardId: props.cardId,
                body: comment,
              });
              setComment('');
            }}
            variant="primary"
          >
            Save
          </Button>

          {commentsList}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => props.handleUpdateShowCardDetail(props.cardId)} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

CardDetailWindow.propTypes = {
  comments: PropTypes.array,
  cardId: PropTypes.number,
  thisCardComments: PropTypes.array,
  author: PropTypes.string,
  visible: PropTypes.bool,
  cardName: PropTypes.string,
  nameList: PropTypes.string,
  cardDescription: PropTypes.string,
  handleAddComment: PropTypes.func,
  handleUpdateShowCardDetail: PropTypes.func,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { handleAddComment })(CardDetailWindow);
