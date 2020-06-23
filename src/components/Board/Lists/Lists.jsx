import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ListHeader from './ListHeader/ListHeader.jsx';
import Cards from './Cards/Cards.jsx';
import AddCardInput from './AddCardInput/AddCardInput.jsx';

const Lists = props => {
  const listsElements = props.lists.map(list => (
    <div key={list.id}>
      <Card style={{ width: '18rem' }}>
        <ListHeader name={list.name} handleUpdateListName={props.handleUpdateListName} listId={list.id} />
        <Cards
          cards={props.cards}
          comments={props.comments}
          listId={list.id}
          handleRemoveCard={props.handleRemoveCard}
          nameList={list.name}
          handleAddDescription={props.handleAddDescription}
          handleAddComment={props.handleAddComment}
          handleRemoveComment={props.handleRemoveComment}
          handleUpdateComment={props.handleUpdateComment}
          handleUpdateCardTitle={props.handleUpdateCardTitle}
        />
        <AddCardInput handleAddCard={props.handleAddCard} listId={list.id} cards={props.cards} author={props.author} />
      </Card>
    </div>
  ));
  return <>{listsElements}</>;
};

Lists.propTypes = {
  handleUpdateListName: PropTypes.func,
  cards: PropTypes.array,
  comments: PropTypes.array,
  handleRemoveCard: PropTypes.func,
  handleAddComment: PropTypes.func,
  handleUpdateComment: PropTypes.func,
  handleUpdateCardTitle: PropTypes.func,
  handleAddCard: PropTypes.func,
  author: PropTypes.string,
  handleAddDescription: PropTypes.func,
  handleRemoveComment: PropTypes.func,
  lists: PropTypes.array,
};

export default Lists;
