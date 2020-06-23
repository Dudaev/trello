import React from 'react';
import { Card } from 'react-bootstrap';
import AddCardInput from './AddCardInput/AddCardInput';
import ListHeader from './ListHeader/ListHeader';
import Cards from './Cards/Cards';

function List(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <ListHeader name={props.name} handleUpdateListName={props.handleUpdateListName} listId={props.listId} />
        <Cards
          cards={props.cards}
          comments={props.comments}
          idList={props.listId}
          handleRemoveCard={props.handleRemoveCard}
          nameList={props.name}
          handleAddDescription={props.handleAddDescription}
          handleAddComment={props.handleAddComment}
          handleRemoveComment={props.handleRemoveComment}
          handleUpdateComment={props.handleUpdateComment}
          handleUpdateCardTitle={props.handleUpdateCardTitle}
        />
        <AddCardInput
          handleAddCard={props.handleAddCard}
          listId={props.listId}
          cards={props.cards}
          author={props.author}
        />
      </Card>
    </div>
  );
}

export default List;
