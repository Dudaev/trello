import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/Nav.jsx';
import Board from './components/Board/Board.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Board />
    </div>
  );
}

export default App;
