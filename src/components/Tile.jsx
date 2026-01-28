  
import '../style/Tile.css';

function Tile({ board, rowIndex, cellIndex, onClick }) {
  const value = board[rowIndex][cellIndex];
  const markClass = value === 'X' ? 'tile-x' : value === 'O' ? 'tile-o' : '';
  return (
    <div className="tile">
      <button className={`tile-button ${markClass}`} onClick={onClick}>
        {value || '\u00A0'}
      </button>
    </div>
  );
}

export default Tile;