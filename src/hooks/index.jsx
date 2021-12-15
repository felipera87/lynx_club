import React from 'react';

import { GlobalProvider } from './global';

const AppProvider = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default AppProvider;
