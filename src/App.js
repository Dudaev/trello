import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav/Nav";
import Board from "./components/Board/Board";

const initialLists = JSON.parse(localStorage.getItem('lists')) || [
    { id: 0, name: 'TODO' },
    { id: 1, name: 'In Progress' },
    { id: 2, name: 'Testing' },
    { id: 3, name: 'Done' },
];
const initialCards = JSON.parse(localStorage.getItem('cards')) || [];
const initialComments = JSON.parse(localStorage.getItem('comments')) || [];
const initialAuthor = JSON.parse(localStorage.getItem('author')) || '';

function App(props) {
    const [lists, setLists] = useState(initialLists);
    const [cards, setCards] = useState(initialCards);
    const [comments, setComments] = useState(initialComments);
    const [author, setAuthor] = useState(initialAuthor);
  return (
    <div className="App">
        <Nav/>
        <Board lists={lists}
               setLists={setLists}
               cards={cards}
               setCards={setCards}
               comments={comments}
               setComments={setComments}
               author={author}
               setAuthor={setAuthor}
               initialAuthor={initialAuthor}/>
    </div>

  );
}


export default App;
