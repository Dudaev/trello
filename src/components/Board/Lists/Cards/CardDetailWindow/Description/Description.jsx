import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAddDescription } from '../../../../../../redux/actions';

const Description = props => {
  const [description, setDescription] = useState(props.cardDescription);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {!visible && (
        <div>
          <div>{props.cardDescription}</div>
          <Button onClick={() => setVisible(true)} variant="link">
            Edit
          </Button>
        </div>
      )}
      {visible && (
        <div>
          <InputGroup>
            <FormControl
              value={description}
              onChange={e => setDescription(e.target.value)}
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
          <Button
            onClick={() => {
              setVisible(false);
              props.handleAddDescription(description, props.cardId);
            }}
            variant="primary"
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};
Description.propTypes = {
  cardDescription: PropTypes.string,
  cardId: PropTypes.number,
  handleAddDescription: PropTypes.func,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { handleAddDescription })(Description);
