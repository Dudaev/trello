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
        <ListHeader name={list.name} listId={list.id} />
        <Cards cards={props.cards} comments={props.comments} listId={list.id} nameList={list.name} />
        <AddCardInput listId={list.id} cards={props.cards} />
      </Card>
    </div>
  ));
  return <>{listsElements}</>;
};

Lists.propTypes = {
  cards: PropTypes.array,
  comments: PropTypes.array,
  lists: PropTypes.array,
};

export default Lists;
