import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav/Nav";
import Board from "./components/Board/Board";



function App(props) {
  return (
    <div className="App">
        <Nav/>
        <Board/>
    </div>

  );
}


export default App;
