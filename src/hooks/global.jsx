import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [mintQuantity, setMintQuantity] = useState(20);

  return (
    <GlobalContext.Provider
      value={{
        mintQuantity,
        setMintQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalData() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalData must be used within a GlobalProvider');
  }

  return context;
}

export { GlobalProvider, useGlobalData };
