  
import '../style/Tile.css';

function Tile({ board, rowIndex, cellIndex, onClick }){
    return(
        <div className='tile'>
            <button className='tile-button' onClick={onClick}>{board[rowIndex][cellIndex]}</button>
        </div>
    );
}

export default Tile;