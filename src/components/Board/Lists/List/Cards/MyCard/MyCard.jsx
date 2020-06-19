import React from 'react';
import s from "./MyCards.module.css";
import {ListGroup, Button} from "react-bootstrap";
import CardDetailWindow from "./CardDetailWindow/CardDetailWindow";

class MyCard extends React.Component {
    state = {
        visible: false
    }
    handleClosingWindow = (e) => {
        e.preventDefault()
        this.setState({ visible: false })
    }
    handleOpenWindow = (e) => {
        e.preventDefault()
        this.setState({ visible: true })
    }

    removeCard = () => {
        this.props.removeCard(this.props.cardId)
    }
    render() {
        const { visible } = this.state
        const name = this.props.name
        const comment = this.props.comment.length
        const nameList = this.props.nameList
        return (
            <div className={s.container}>
                <Button onClick={this.removeCard} className={s.close} variant="link">X</Button>
                <ListGroup.Item onClick={ this.handleOpenWindow }>
                    <div>{name}</div>
                    <div className={s.comment}>Com {comment}</div>
                </ListGroup.Item>
                {
                    visible && <CardDetailWindow visible={visible}
                                                 handleClosingWindow={this.handleClosingWindow}
                                                 cardName={name}
                                                 nameList={nameList}
                                                 cardId={this.props.cardId}
                                                 author={this.props.author}
                                                 handleAddDescription={this.props.handleAddDescription}
                                                 CardDescription={this.props.CardDescription}
                                                 comments={this.props.comment}
                                                 dataComments={this.props.dataComments}
                                                 handleAddComment={this.props.handleAddComment}
                                                 handleRemoveComment={this.props.handleRemoveComment}
                                                 handleUpdateComment={this.props.handleUpdateComment}
                                                 handleUpdateCardTitle={this.props.handleUpdateCardTitle}
                    />
                }
            </div>
        );
    }
}

export default MyCard;