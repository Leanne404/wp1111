/****************************************************************************
  FileName      [ HomePage.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Home page.  ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import './css/HomePage.css';
import React, { useEffect, useState } from 'react';

const HomePage = ({ startGameOnClick, mineNumOnChange, boardSizeOnChange, mineNum, boardSize /* -- something more... -- */ }) => {
  const [showPanel, setShowPanel] = useState(false);      // A boolean variable. If true, the controlPanel will show.
  const [error, setError] = useState(false);              // A boolean variable. If true, means that the numbers of mines and the board size are invalid to build a game.

  const diffAdjClick = () => {
    if(showPanel === false){
      setShowPanel(true)
    }
    else if(showPanel === true){
      setShowPanel(false)
    }
  }

  const checkError = () => {
    if(mineNum > boardSize*boardSize){
      setError(true)
    }
    else{
      setError(false)
    }
  }

  useEffect(()=>{
    checkError()
  },[mineNum, boardSize])
   
  {/* Advanced TODO: Implementation of Difficult Adjustment
                     Some functions may be added here! */}
                     
  return (
    <div className='HomeWrapper'>
      <p className='title'>MineSweeper</p>
      {/* Basic TODO:  Implemen start button */}
      <button className='btn' onClick={startGameOnClick}>Start Game</button>
      <div className="controlContainer">
        <button className='btn' onClick={diffAdjClick}>Difficulty Adjustment</button>
        {showPanel ? 
          <div className="controlWrapper">
          <div className="error" style={error? {color: '#880000'}:{color: 'transparent'}}>ERROR: Mines number and board size are invalid!</div>
          <div className="controlPane">
            <div className="controlCol">
              <p className='controlTitle'>Mines Number</p>
              <input type='range' step = '1' min = "1" max = "225" defaultValue="10" onChange={mineNumOnChange}></input>
              <p className='controlNum' style={error? {color: '#880000'}:{color: '#0f0f4b'}}>{mineNum}</p>
            </div>
            <div className="controlCol">
              <p className='controlTitle'>Board Size (n*n)</p>
              <input type='range' step = '1' min = "1" max = "15" defaultValue="8" onChange={boardSizeOnChange}></input>
              <p className='controlNum' style={error? {color: '#880000'}:{color: '#0f0f4b'}}>{boardSize}</p>
            </div>
          </div>
        </div>
        : <></>
        }
      </div>
      {/* Advanced TODO: Implementation of Difficult Adjustment
                Useful Hint: <input type = 'range' min = '...' max = '...' defaultValue = '...'> 
                Useful Hint: Error color: '#880000', default text color: '#0f0f4b', invisible color: 'transparent' 
                Reminder: The defaultValue of 'mineNum' is 10, and the defaultValue of 'boardSize' is 8. */}
    </div>
  );

}
export default HomePage;   