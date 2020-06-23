import React from 'react';
import { Card } from 'react-bootstrap';
import ListHeader from './ListHeader/ListHeader';
import Cards from './Cards/Cards';
import AddCardInput from './AddCardInput/AddCardInput';

const Lists = props => {
  const listsElements = props.lists.map(list => (
    <div key={list.id}>
      <Card style={{ width: '18rem' }}>
        <ListHeader name={list.name} handleUpdateListName={props.handleUpdateListName} listId={list.id} />
        <Cards
          cards={props.cards}
          comments={props.comments}
          idList={list.id}
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

export default Lists;
