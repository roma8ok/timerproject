import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import ROUTES from './routes';
import TestView from '../views/TestView';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.test} component={TestView} />
      </Switch>
    </BrowserRouter>
  );
}
