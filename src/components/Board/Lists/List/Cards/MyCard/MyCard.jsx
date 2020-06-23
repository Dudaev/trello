import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import styles from './MyCards.module.css';
import CardDetailWindow from './CardDetailWindow/CardDetailWindow.jsx';

class MyCard extends React.Component {
  state = {
    visible: false,
  };

  handleClosingWindow = () => {
    this.setState({ visible: false });
  };

  handleOpenWindow = () => {
    this.setState({ visible: true });
  };

  removeCard = () => {
    this.props.handleRemoveCard(this.props.cardId);
  };

  render() {
    // debugger
    const { visible } = this.state;
    const { name } = this.props;
    const comment = this.props.thisCardComments.length;
    const { nameList } = this.props;
    return (
      <div className={styles.container}>
        <Button onClick={this.removeCard} className={styles.close} variant="link">
          X
        </Button>
        <ListGroup.Item onClick={this.handleOpenWindow}>
          <div>{name}</div>
          <div className={styles.comment}>Com {comment}</div>
        </ListGroup.Item>
        {visible && (
          <CardDetailWindow
            visible={visible}
            handleClosingWindow={this.handleClosingWindow}
            cardName={name}
            nameList={nameList}
            cardId={this.props.cardId}
            author={this.props.author}
            handleAddDescription={this.props.handleAddDescription}
            cardDescription={this.props.cardDescription}
            thisCardComments={this.props.thisCardComments}
            comments={this.props.comments}
            handleAddComment={this.props.handleAddComment}
            handleRemoveComment={this.props.handleRemoveComment}
            handleUpdateComment={this.props.handleUpdateComment}
            handleUpdateCardTitle={this.props.handleUpdateCardTitle}
          />
        )}
      </div>
    );
  }
}

export default MyCard;
