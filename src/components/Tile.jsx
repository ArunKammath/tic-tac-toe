  
import '../style/Tile.css';
import { useRef } from 'react';
import { useSymbol } from '../hooks/Symbol.jsx';

function Tile(){
    const { symbol, setSymbol } = useSymbol();
    const symbolRef = useRef(null);
    const clickedRef = useRef(false);
    const handleClick = () => {
        if(!clickedRef.current){
            symbolRef.current = symbol;
            clickedRef.current = true;
            setSymbol(symbol === 'X' ? 'O' : 'X');
        }
    };
    return(
        <div className="tile">
            <button ref={symbolRef} onClick={handleClick}>{clickedRef.current ? symbolRef.current : ' '}</button>
        </div>
    );
}

export default Tile;