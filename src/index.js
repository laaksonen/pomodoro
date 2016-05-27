import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
