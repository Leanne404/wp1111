import './App.css';
import Title from './Title'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react';

global.todoCnt = 0;

function App() {
  const [note, setNote] = useState([])
  console.log('app')
  return (
    <div className="todo-app__root">
      <Title />
      <Main setNote = {setNote}/>
      <Footer note = {note}/>
    </div>
  );
}

export default App;
