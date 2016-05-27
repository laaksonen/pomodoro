import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import StatusText from '../components/StatusText';
import TimerContainer from '../modules/timer/Containers/TimerContainer';
import SettingsContainer from '../modules/settings/Containers/SettingsContainer';
import { toggleDesktopNotification } from '../modules/settings/settings';
import SettingsButton from '../modules/settings/Containers/SettingsButton.js';
import CompletedCount from '../modules/timer/Containers/CompletedCount';
// <Navigation timerType={timerType} />

class App extends Component {
  componentWillMount() {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        this.props.toggleDesktopNotification();
      }
    });
  }

  render() {
    const { timerType } = this.props;

    const containerClass = classNames({
      'site-container bg-red':
        timerType === 'none' || timerType === 'pomodoro',
      'site-container bg-blue': timerType === 'shortBreak',
      'site-container bg-green': timerType === 'longBreak',
    });

    return (
      <div className={containerClass}>
        <StatusText timerType={timerType} />
        <TimerContainer />
        <SettingsContainer />
        <CompletedCount />
        <SettingsButton />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { timerType: state.timer.timerType };
};

export default connect(mapStateToProps, { toggleDesktopNotification })(App);
