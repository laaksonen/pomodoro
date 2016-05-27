import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Navigation from './Navigation';
import SettingsContainer from '../modules/settings/Containers/SettingsContainer.js';
import Footer from './Footer';
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
        {this.props.children}
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
