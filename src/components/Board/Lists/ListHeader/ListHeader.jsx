import React, { useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleUpdateListName } from '../../../../redux/actions';

const ListHeader = props => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(props.name);

  const handleShowInput = () => {
    setVisible(true);
  };

  const handleHideInput = () => {
    setVisible(false);
    props.handleUpdateListName(props.listId, title);
  };
  return (
    <div>
      {!visible && (
        <Card.Header onClick={handleShowInput}>
          <div>{props.name}</div>
        </Card.Header>
      )}
      {visible && (
        <InputGroup>
          <FormControl
            value={title}
            placeholder="Enter list title"
            aria-label="Enter list title"
            onChange={e => setTitle(e.target.value)}
          />
          <InputGroup.Append>
            <Button onClick={handleHideInput} variant="outline-secondary">
              Save
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </div>
  );
};
ListHeader.propTypes = {
  name: PropTypes.string,
  handleUpdateListName: PropTypes.func,
  listId: PropTypes.number,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { handleUpdateListName })(ListHeader);
