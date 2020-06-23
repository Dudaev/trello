import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Comment = props => {
  const [updateComment, setUpdateComment] = useState(props.body);
  const [visible, setVisible] = useState(false);

  const handleRemoveComment = idOfRemovedComment => {
    props.handleRemoveComment(idOfRemovedComment);
  };
  const handleUpdateComment = idOfUpdatedComment => {
    setVisible(false);
    props.handleUpdateComment(idOfUpdatedComment, updateComment);
  };

  return (
    <div key={props.id}>
      <div>
        <b>{props.author}</b>
      </div>
      {!visible && (
        <div>
          {props.body}
          <div>
            <Button onClick={() => setVisible(true)} variant="link">
              Edit
            </Button>
            <Button onClick={() => handleRemoveComment(props.id)} variant="link">
              Delete
            </Button>
          </div>
        </div>
      )}
      {visible && (
        <div>
          <InputGroup>
            <FormControl
              value={updateComment}
              placeholder="Enter list title"
              aria-label="Enter list title"
              onChange={e => setUpdateComment(e.target.value)}
            />
            <InputGroup.Append>
              <Button onClick={() => handleUpdateComment(props.id)}>Save</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      )}
    </div>
  );
};

export default Comment;
