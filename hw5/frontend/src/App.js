import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { startGame, guess, restart } from "./axios"

function App() {
  // Define states
  // Define three different views

  const [hasStarted, setHasStarted] = useState(false) 
  const [hasWon, setHasWon] = useState(false)
  const [number, setNumber] = useState('')
  const [status, setStatus] = useState('')

  const handleGuess = async() => {
    const response = await guess(number)
    if (response === 'Equal'){
      setHasWon(true)
      setStatus('')
    }
    else {
      setStatus(response)
      setNumber('')
  } }

  const startMenu =
    <div>
      <button id = "btn_start"
        onClick = {
        async() =>{
          await startGame()
          setHasStarted(true)
        }
          // someFunctionToBackend; and setHasStarted
        } > start game </button>
    </div>


  const handleChange = event => {
    setNumber(event.target.value);
  }

  const gameMode =
  <>
    <p>Guess a number between 1 to 100</p>
    <input onChange={handleChange}
     // Get the value from input 
    >
    </input>
    <button  // Send number to backend
      id = "btn_guess"
      onClick={handleGuess}
      disabled={!number} >guess!</button> 
    <p>{status}</p>
  </>

  const winningMode = 
  <>
    <p>you won! the number was {number}.</p>
    <button 
      id = "btn_restart"
      onClick = {
        async() =>{
          await restart()
          setHasWon(false)
        }
      }// Handle restart for backend and frontend
    >restart</button>
  </>


  const game = 
  <div>
    {hasWon? winningMode: gameMode}
  </div>


  return <div className="App">
     {hasStarted ? game : startMenu} 
     </div>
}

export default App;
