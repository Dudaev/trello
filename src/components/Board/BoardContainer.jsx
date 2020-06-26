import React, from 'react';
import {connect} from "react-redux";



const mapStateToProps = (state) => {
  return {
    lists:state.lists,
    cards: state.cards,
    comments: state.comments,
    author:state.author
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLists: (text) => {
      dispatch(updateLists(text));
    },
    setCards: (addedCard) => {
      dispatch(setCards(addedCard));
    },
    setComments: (addedComment) => {
      dispatch(setComments(addedComment));
    },
    setAuthor: (text) => {
      dispatch(setAuthor(text));
    }
  }
}

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);

export default BoardContainer;
