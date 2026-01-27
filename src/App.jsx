
import './App.css'
import Tile from './components/Tile.jsx'
import { useSymbol } from './hooks/Symbol.jsx'
function App() {
  const { symbol, setSymbol } = useSymbol(); 

  return(
    <div className='layout'>
      <h1>Tic Tac Toe</h1>
      <p>Next Player: {symbol}</p>
      <div className='board'>   
        {[...Array(9)].map((_, i) => (
          <Tile key={i} />
        ))}
      </div>
    </div>
  )
}

export default App
