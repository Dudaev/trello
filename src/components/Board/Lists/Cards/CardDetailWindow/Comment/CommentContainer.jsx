import React from 'react';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    body:state.body,
    id: state.id,
    author: state.author
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveComment: (commentId) => {
      dispatch(handleRemoveComment(commentId))
    },
    handleUpdateComment: (commentId, updatedBody) => {
      dispatch(handleUpdateComment(commentId, updatedBody))
    }
  }
}

const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);

export default CommentContainer;
