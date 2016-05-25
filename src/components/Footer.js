import React, { Component } from 'react';
import CompletedCount from '../modules/timer/Components/CompletedCount';
import TimerSettings from '../modules/timer/Components/TimerSettings';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer pa3 f4">
        <CompletedCount />
        <TimerSettings />
      </div>
    );
  }
}
