import React, { Component } from 'react';
import Helmet from 'react-helmet';
import TimerContainer from '../../timer/Components/TimerContainer';
import CompletedCount from '../../timer/Components/CompletedCount';
import TimerSettings from '../../timer/Components/TimerSettings';

export default class LandingView extends Component {
  render() {
    return (
      <div className="site-content">
        <TimerContainer />
      </div>
    );
  }
}
