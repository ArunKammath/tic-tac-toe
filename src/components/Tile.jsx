import { useSymbol } from '../hooks/Symbol.jsx';    
import '../style/Tile.css';

function Tile(){
    const {symbol, setSymbol} = useSymbol();

    return(
        <div className="tile">
            <p>{symbol}</p>
        </div>
    )
}

export default Tile