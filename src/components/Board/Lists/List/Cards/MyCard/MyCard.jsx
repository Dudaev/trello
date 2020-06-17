import React from 'react';
import s from "./MyCards.module.css";
import {ListGroup, Button} from "react-bootstrap";
import CardDetailWindow from "../../../../CardDetailWindow/CardDetailWindow";

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
        const comment = this.props.comment
        return (
            <div className={s.container}>
                <Button onClick={this.removeCard} className={s.close} variant="link">X</Button>
                <ListGroup.Item onClick={ this.handleOpenWindow }>
                    <div>{name}</div>
                    <div className={s.comment}>Com {comment}</div>
                </ListGroup.Item>
                {
                    visible && <CardDetailWindow visible={visible} handleClosingWindow={this.handleClosingWindow}/>
                }
            </div>
        );
    }
}

export default MyCard;