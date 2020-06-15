import React from 'react';
import Lists from "./Lists/Lists";
import Login from "./Login/Login";
import CardDetailWindow from "./CardDetailWindow/CardDetailWindow";

const Board = (props) => {
    return (
        <div>
            <Lists BoardPage={props.BoardPage}/>
            <Login/>
        </div>
    );
};



export default Board;