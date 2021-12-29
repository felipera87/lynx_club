import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';

import './index.css';
import GlobalStyle from './styles/global';

import 'aos/dist/aos.css';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
};

export default App;
