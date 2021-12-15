import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import LandingPage from '../pages/LandingPage';
import MintPage from '../pages/MintPage';
import Roadmap from '../pages/Roadmap';
import Specifications from '../pages/Specifications';
import TermsAndConditions from '../pages/TermsAndConditions';
import TheTeam from '../pages/TheTeam';
import WhatIsThisPage from '../pages/WhatIsThisPage';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/mint" component={MintPage} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/specifications" component={Specifications} />
      <Route path="/terms" component={TermsAndConditions} />
      <Route path="/team" component={TheTeam} />
      <Route path="/whatisthis" component={WhatIsThisPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
