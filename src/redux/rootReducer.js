import { combineReducers } from 'redux';
import timer from '../modules/timer/timer.js';
import settings from '../modules/settings/settings';

const rootReducer = combineReducers({
  timer,
  settings,
});

export default rootReducer;
