import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav/Nav";
import Board from "./components/Board/Board";


function App(props) {
    debugger
  return (
    <div className="App">
        <Nav/>
        <Board BoardPage={props.state.BoardPage} dispatch={props.dispatch}/>
    </div>

  );
}


export default App;
