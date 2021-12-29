import React, { createContext, useContext, useState, useEffect } from 'react';
import Aos from 'aos';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [mintQuantity, setMintQuantity] = useState(20);

  const [documentWidth, setDocumentWidth] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    setDocumentWidth(document.body.clientWidth);

    // eslint-disable-next-line no-undef
    window.addEventListener('resize', () => {
      // eslint-disable-next-line no-undef
      setDocumentWidth(document.body.clientWidth);
    });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        mintQuantity,
        setMintQuantity,
        documentWidth,
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
