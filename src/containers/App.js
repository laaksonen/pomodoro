import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Navigation from '../components/Navigation';
import TimerContainer from '../modules/timer/Containers/TimerContainer';
import SettingsContainer from '../modules/settings/Containers/SettingsContainer';
import Footer from '../components/Footer';
import { toggleDesktopNotification } from '../modules/settings/settings';

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
        <Navigation timerType={timerType} />
        <div className="site-content">
          <TimerContainer />
        </div>
        <SettingsContainer />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { timerType: state.timer.timerType };
};

export default connect(mapStateToProps, { toggleDesktopNotification })(App);
