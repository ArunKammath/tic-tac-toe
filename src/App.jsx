
import './App.css'
import Tile from './components/Tile.jsx'

function App() {

  return(
    <div className='layout'>
      {[...Array(9)].map((_, i) => (
        <Tile key={i} />
      ))}
    </div>
  )
}

export default App
