import { useState, useRef } from 'react';
import './App.css'
import Tile from './components/Tile.jsx'
function validateBoard(board, rowIndex, cellIndex) {
  let i=rowIndex, j=cellIndex;
  let char=board[i][j];
  if(char === '') return false;

  let gameWon=false;
  for(let k=0; k<3; k++){
    if(board[i][k] !== char) break;
    if(k===2) gameWon=true;
  }
  for(let k=0; k<3 && !gameWon; k++){
    if(board[k][j] !== char) break;
    if(k===2) gameWon=true;
  }
  if(i===j && !gameWon){
    for(let k=0; k<3; k++){
      if(board[k][k] !== char) break;
      if(k===2) gameWon=true;
    }
  }
  if(i+j===2 && !gameWon){
    for(let k=0; k<3; k++){
      if(board[k][2-k] !== char) break;
      if(k===2) gameWon=true;
    }
  }
  console.log(gameWon);
  return gameWon;
}

function App() {
  const [symbol, setSymbol] = useState('X');
  const boardRef = useRef({board: Array(3).fill(null).map(() => Array(3).fill(''))});
  const[gameWon, setGameWon] = useState(false);
 
  const handleTileClick = (rowIndex, cellIndex) => {
    if(boardRef.current.board[rowIndex][cellIndex] !== '') return;

    boardRef.current.board[rowIndex][cellIndex] = symbol;
    if(validateBoard(boardRef.current.board, rowIndex, cellIndex)) setGameWon(true);
    else{
      setSymbol(symbol === 'X' ? 'O' : 'X');
    }
  }
  
  return(
    <div className='layout'>
      <h1>Tic Tac Toe</h1>
      <p>Next Player: {symbol}</p>
      <div className='board'>   
        {boardRef.current.board.map((row, rowIndex) => (
          row.map((cell, cellIndex) => (
            <Tile key={`${rowIndex}-${cellIndex}`} board={boardRef.current.board} rowIndex={rowIndex} cellIndex={cellIndex} onClick={() => handleTileClick(rowIndex, cellIndex)}/>
          ))
        ))}
      </div>
      {gameWon &&<div className='winner'><h1>Game Won by {symbol}</h1></div>}
    </div>
  );
}

export default App;
