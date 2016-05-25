import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  renderStatusText() {
    switch (this.props.timerType) {
    case 'pomodoro':
      return <span>Pomodoro session</span>;
    case 'shortBreak':
      return <span>Short break</span>;
    case 'longBreak':
      return <span>Long break</span>;
    default:
      return <span>Pomodoro timer</span>;
    }
  }

  render() {

    return (
      <div className="navigation pa3 f4">
        <div className="f4 fw7">
          {this.renderStatusText()}
        </div>
        <div>
          Sign up / Sign in
        </div>
      </div>
    );
  }
}
