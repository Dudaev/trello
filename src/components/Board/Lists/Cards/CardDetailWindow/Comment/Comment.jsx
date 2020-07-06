import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleRemoveComment, handleUpdateComment } from '../../../../../../redux/actions';

const Comment = props => {
  const [updateComment, setUpdateComment] = useState(props.body);
  const [visible, setVisible] = useState(false);

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
            <Button onClick={() => props.handleRemoveComment(props.id)} variant="link">
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
              <Button onClick={() => props.handleUpdateComment(props.id, updateComment)}>Save</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      )}
    </div>
  );
};
Comment.propTypes = {
  body: PropTypes.string,
  handleRemoveComment: PropTypes.func,
  handleUpdateComment: PropTypes.func,
  id: PropTypes.number,
  author: PropTypes.string,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { handleRemoveComment, handleUpdateComment })(Comment);
