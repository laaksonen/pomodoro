import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

// if (process.env.BROWSER) {
require('../styles/core.scss');
// }

export default class Root extends Component {
  render() {
    const { store, routes, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>{routes}</Router>
        </div>
      </Provider>
    );

  }
}
