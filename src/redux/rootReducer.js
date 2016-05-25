import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import timer from '../modules/timer/timer.js';
import settings from '../modules/timer/settings';

const rootReducer = combineReducers({
  routing,
  timer,
  settings,
});

export default rootReducer;
