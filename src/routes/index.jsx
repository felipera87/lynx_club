import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import LandingPage from '../pages/LandingPage';
import MintPage from '../pages/MintPage';
import TermsAndConditions from '../pages/TermsAndConditions';

import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/mint" component={MintPage} />
      <Route path="/terms" component={TermsAndConditions} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
