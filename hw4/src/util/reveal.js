/****************************************************************************
  FileName      [ reveal.js ]
  PackageName   [ src/util ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file states the reaction when left clicking a cell. ]
  Copyright     [ 2022 10 ]
****************************************************************************/
// import { cloneElement } from "react";
export const revealed = (board, x, y, newNonMinesCount, boardSize, setRemainFlagNum) => {

    function revealRecursion(cell){
      
      if(!cell.flagged){
        cell.revealed = true;
        newNonMinesCount--;
      }
      if(cell.value === 0){
        if(cell.x - 1 >= 0 && !board[cell.x - 1][cell.y].revealed) revealRecursion(board[cell.x - 1][cell.y])
        if(cell.x - 1 >= 0 && cell.y + 1 < boardSize && !board[cell.x - 1][cell.y + 1].revealed) revealRecursion(board[cell.x - 1][cell.y + 1])
        if(cell.y + 1 < boardSize && !board[cell.x][cell.y + 1].revealed) revealRecursion(board[cell.x][cell.y + 1])
        if(cell.x + 1 < boardSize && cell.y + 1 < boardSize && !board[cell.x + 1][cell.y + 1].revealed) revealRecursion(board[cell.x + 1][cell.y + 1])
        if(cell.x + 1 < boardSize && !board[cell.x + 1][cell.y].revealed) revealRecursion(board[cell.x + 1][cell.y])
        if(cell.x + 1 < boardSize && cell.y - 1 >= 0 && !board[cell.x + 1][cell.y - 1].revealed) revealRecursion(board[cell.x + 1][cell.y - 1])
        if(cell.y - 1 >= 0 && !board[cell.x][cell.y - 1].revealed) revealRecursion(board[cell.x][cell.y - 1])
        if(cell.x - 1 >= 0 && cell.y - 1 >= 0 && !board[cell.x - 1][cell.y - 1].revealed) revealRecursion(board[cell.x - 1][cell.y - 1])
      }
    }
    revealRecursion(board[x][y])
    // Advanced TODO: reveal cells in a more intellectual way.
    // Useful Hint: If the cell is already revealed, do nothing.
    //              If the value of the cell is not 0, only show the cell value.
    //              If the value of the cell is 0, we should try to find the value of adjacent cells until the value we found is not 0.
    //              The input variables 'newNonMinesCount' and 'board' may be changed in this function.
    // && cell.x - 1 >= 0 && cell.y - 1 >= 0 && cell.x + 1 < boardSize && cell.y + 1 < boardSize && !cell.revealed

    return { board, newNonMinesCount };
};
