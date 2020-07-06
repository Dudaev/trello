import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Board.module.css';
import Lists from './Lists/Lists.jsx';
import Login from './Login/Login.jsx';

function Board(props) {
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(props.state.cardsReducer));
    localStorage.setItem('comments', JSON.stringify(props.state.commentsReducer));
    localStorage.setItem('lists', JSON.stringify(props.state.listsReducer));
    localStorage.setItem('author', JSON.stringify(props.state.authorReducer));
  }, [props.state.cardsReducer, props.state.commentsReducer, props.state.listsReducer, props.state.authorReducer]);

  return (
    <div>
      <div className={styles.container}>
        <Lists
          cards={props.state.cardsReducer}
          comments={props.state.commentsReducer}
          lists={props.state.listsReducer}
        />
      </div>
      {props.state.authorReducer === '' && <Login />}
    </div>
  );
}

const mapStateToProps = state => ({
  state,
});

Board.propTypes = {
  state: PropTypes.object,
};

export default connect(mapStateToProps, {})(Board);
