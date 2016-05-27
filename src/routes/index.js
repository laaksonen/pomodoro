import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import NotFoundView from '../views/NotFoundView';

const routes = (
  <Route path="/" component={App}>

    <Route path="*" component={NotFoundView} />
  </Route>);

export default routes;
