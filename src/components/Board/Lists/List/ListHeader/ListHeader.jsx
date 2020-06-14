import React from 'react';
import {Button, Card, FormControl, InputGroup} from "react-bootstrap";

class ListHeader extends React.Component {
    state = {visible: false}

    handleShowInput= (e) => {
        this.setState({visible: true})
    }

    handleHideInput= (e) => {
        this.setState({visible: false})
    }
    render() {
        const {visible} = this.state
        return (
            <div>
                {
                    !visible && <Card.Header onClick={ this.handleShowInput }>
                        <div>{this.props.name}</div>
                    </Card.Header>
                }
                {
                    visible && <InputGroup >
                        <FormControl/>
                        <InputGroup.Append>
                            <Button onClick={ this.handleHideInput } variant="outline-secondary">Save</Button>
                        </InputGroup.Append>
                    </InputGroup>
                }

            </div>
        );
    }
}

export default ListHeader;