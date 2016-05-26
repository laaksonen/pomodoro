import React, { Component } from 'react';
import Helmet from 'react-helmet';
import TimerContainer from '../../timer/Components/TimerContainer';

export default class LandingView extends Component {
  render() {
    return (
      <div className="site-content">
        <TimerContainer />
      </div>
    );
  }
}
