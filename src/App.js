import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav/Nav";
import Board from "./components/Board/Board";
import Login from "./components/Login/Login";


function App(props) {
  return (
    <div className="App">
        <Nav/>
        <Board BoardPage={props.state.BoardPage}/>
        {/*<Login/>*/}
    </div>

  );
}


export default App;
