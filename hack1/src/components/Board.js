/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import Row from "./Row";
import './css/Board.css';
import React from "react";
import CurRow from "./CurRow";

const Board = ({ turn, guesses, curGuess }) => {
    console.log(guesses, turn)
    return (
        <div className="Board-container">
            {
                guesses.map((row, index) => (
                    <CurRow curGuess = {curGuess} rowIdx = {index} id = {"row_"+index.toString()} key = {"row_"+index.toString()}/>
                ))
               
                
            }
            {/* TODO 2-2: show 6 rows (map function is recommended) and defined row's key.
                Hint: Use `CurRow` instead of `Row` when you are passing `curGuess` into it. */}
            
        </div>
    )
};
export default Board;


