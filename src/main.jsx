import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SymbolProvider } from './hooks/Symbol.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SymbolProvider>
      <App />
    </SymbolProvider>
  </StrictMode>,
)
