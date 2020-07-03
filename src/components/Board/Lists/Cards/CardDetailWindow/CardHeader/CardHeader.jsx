import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {handleUpdateCardTitle} from "../../../../../../redux/actions";

const CardHeader = props => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(props.title);

  const handleUpdateCardTitle = () => {
    setVisible(false);
    props.handleUpdateCardTitle(props.cardId, title);
  };

  return (
    <div>
      {!visible && (
        <div>
          <Modal.Title>{props.title}</Modal.Title>
          <Button onClick={() => setVisible(true)} variant="link">
            Edit
          </Button>
        </div>
      )}
      {visible && (
        <div>
          <InputGroup>
            <FormControl value={title} onChange={e => setTitle(e.target.value)} />
            <Button onClick={handleUpdateCardTitle} variant="primary">
              Save
            </Button>
          </InputGroup>
        </div>
      )}
    </div>
  );
};
CardHeader.propTypes = {
  title: PropTypes.string,
  cardId: PropTypes.number,
  handleUpdateCardTitle: PropTypes.func,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { handleUpdateCardTitle })(CardHeader);