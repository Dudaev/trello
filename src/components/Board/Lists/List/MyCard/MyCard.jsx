import React from 'react';
import s from "../MyCard/MyCards.module.css";
import {ListGroup} from "react-bootstrap";
import CardDetailWindow from "../../../CardDetailWindow/CardDetailWindow";

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
    render() {
        const { visible } = this.state
        const name = this.props.name
        const comment = this.props.comment
        return (
            <div>
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