import React, {Component} from 'react';
import s from './Lists.module.css';
import List from "./List/List";

class Lists extends Component {

    render() {
        const {lists} = this.props.BoardPage
        let listsElements = lists.map((l) => {
                    return <List key={l.id} name={l.name} cards={l.cards} />
            });
        return (
            <div>
                <div className={s.container} >
                    {listsElements}
                </div>
            </div>
        );
    }
}

export default Lists;