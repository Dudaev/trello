import React from 'react';
import List from './List/List';

const Lists = props => {
  const listsElements = props.lists.map(list => (
    <List
      key={list.id}
      listId={list.id}
      name={list.name}
      cards={props.cards}
      comments={props.comments}
      author={props.author}
      handleAddCard={props.handleAddCard}
      handleRemoveCard={props.handleRemoveCard}
      handleUpdateListName={props.handleUpdateListName}
      handleAddDescription={props.handleAddDescription}
      handleAddComment={props.handleAddComment}
      handleRemoveComment={props.handleRemoveComment}
      handleUpdateComment={props.handleUpdateComment}
      handleUpdateCardTitle={props.handleUpdateCardTitle}
    />
  ));
  return <>{listsElements}</>;
};

export default Lists;
