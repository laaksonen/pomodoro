import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import Root from './containers/Root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(<Root store={store} routes={routes} history={history} />, document.getElementById('root'));
