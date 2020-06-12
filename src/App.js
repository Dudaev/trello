import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "./components/Board/Popup/Popup";
import Nav from "./components/Nav/Nav";
import Lists from "./components/Board/Lists/Lists";


function App() {
  return (
    <div className="App">
        <Nav />
        <Lists/>
        <Popup/>
    </div>

  );
}


export default App;
