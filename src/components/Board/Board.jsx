import React from 'react';
import Lists from "./Lists/Lists";
import Popup from "./Popup/Popup";

const Board = (props) => {
    return (
        <div>
            <Lists BoardPage={props.BoardPage} dispatch={props.dispatch}/>
            <Popup/>
        </div>
    );
};



export default Board;