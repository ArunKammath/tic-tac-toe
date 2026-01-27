import { createContext, useContext, useState } from 'react';

const symbolContext = createContext(undefined);

const SymbolProvider = ({ children }) => {
    const [symbol, setSymbol] = useState('X');

    return (
        <symbolContext.Provider value={{ symbol, setSymbol }}>
            {children}
        </symbolContext.Provider>
    );
};

const useSymbol = () => useContext(symbolContext);

export { SymbolProvider, useSymbol };