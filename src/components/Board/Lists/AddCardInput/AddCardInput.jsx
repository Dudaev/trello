import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAddCard } from '../../../../redux/actions';

const AddCardInput = props => {
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);

  const generateId = () => {
    let id = 0;
    let result = true;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      for (let i = 0; i < props.cards.length; i += 1) {
        if (id === props.cards[i].id) {
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

  function handleAddAndHide() {
    setVisible(false);

    props.handleAddCard({
      id: generateId(),
      authorId: props.author,
      listId: props.listId,
      name: title,
      description: '',
      showCardDetail: false,
    });
    setTitle('');
  }
  return (
    <div>
      {!visible && (
        <Button onClick={() => setVisible(true)} variant="outline-secondary" size="md" block>
          Add card
        </Button>
      )}

      {visible && (
        <InputGroup>
          <FormControl
            value={title}
            placeholder="Enter a title for this card"
            onChange={e => setTitle(e.target.value)}
          />
          <InputGroup.Append>
            <Button onClick={handleAddAndHide} variant="outline-secondary">
              Add card
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </div>
  );
};

AddCardInput.propTypes = {
  cards: PropTypes.array,
  author: PropTypes.string,
  listId: PropTypes.number,
  handleAddCard: PropTypes.func,
};

const mapStateToProps = state => ({
  author: state.authorReducer,
});

export default connect(mapStateToProps, { handleAddCard })(AddCardInput);
