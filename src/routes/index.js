import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import NotFoundView from '../views/NotFoundView';
import LandingView from '../modules/landing/views/LandingView';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingView} />

    <Route path="*" component={NotFoundView} />
  </Route>);

export default routes;
