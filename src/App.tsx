import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import './App.css';
import Anvil from './components/routes/anvil';
import FourOhFour from './components/routes/fourOhFour';

export const ROUTES = {
  ANVIL: '/',
}

const App = () => {
  return (
    <div className={`d-block`}>
      <BrowserRouter>
        <Switch>
          {/* The hero builder */}
          <Route path={ROUTES.ANVIL} exact component={Anvil} />
          {/* The hero builder */}
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
