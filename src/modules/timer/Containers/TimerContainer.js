import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from '../Components/Timer';
import TimerSelection from '../Components/TimerSelection';
import TimerControls from '../Components/TimerControls';
import {
  initializeTimer,
  tick,
  timerDone,
  pauseTimer,
  resumeTimer,
  exitTimer,
  deactivateTimer,
} from '../timer';
import { notify, playSound } from '../utils/notification';

class TimerContainer extends Component {
  constructor() {
    super();

    this.startTimer = this.startTimer.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
  }

  startTimer(timerType) {
    // Create a new timer with a type and a duration
    this.props.initializeTimer(timerType, this.props[timerType]);

    const timeInterval = setInterval(() => {

      if (this.props.timerType === 'none') {
        this.props.deactivateTimer();
        clearInterval(timeInterval);
        return;
      }
      if (this.props.isPaused) {
        this.props.pauseTimer();
        this.props.deactivateTimer();
        clearInterval(timeInterval);
        return;
      }

      if (this.props.currentTime > 0) {
        this.props.tick();
      } else {
        this.props.timerDone(timerType);
        if (timerType === 'pomodoro' && this.props.desktopNotification) {
          notify('Pomodoro session completed');
        } else if (timerType === 'shortBreak' && this.props.desktopNotification) {
          notify('Short break ended');
        } else if (timerType === 'longBreak' && this.props.deskTopNotification) {
          notify('Long break ended');
        }
        if (this.props.notificationSound) {
          playSound(this.props.soundOption, this.props.notificationVolume);
        }
        clearInterval(timeInterval);
        return;
      }
    }, 1000);
  }

  restartTimer() {
    this.props.resumeTimer();

    const timeInterval = setInterval(() => {
      if (this.props.timerType === 'none') {
        this.props.deactivateTimer();
        clearInterval(timeInterval);
        return;
      }
      if (this.props.isPaused) {
        this.props.pauseTimer();
        this.props.deactivateTimer();
        clearInterval(timeInterval);
        return;
      }

      if (this.props.currentTime > 0) {
        this.props.tick();
      } else {
        this.props.timerDone(this.props.timerType);
        clearInterval(timeInterval);
        return;
      }
    }, 1000);
  }

  render() {
    return (
      <div className="timer-container">
        {this.props.timerType === 'none' ?
          null :
          <Timer currentTime={this.props.currentTime} />
        }
        {this.props.timerType === 'none' ?
          <TimerSelection
            startTimer={this.startTimer}
            isActive={this.props.isActive}
          /> :
          <TimerControls
            timerType={this.props.timerType}
            isPaused={this.props.isPaused}
            isActive={this.props.isActive}
            pauseTimer={this.props.pauseTimer}
            restartTimer={this.restartTimer}
            exitTimer={this.props.exitTimer}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTime: state.timer.currentTime,
    timerType: state.timer.timerType,
    isActive: state.timer.isActive,
    isPaused: state.timer.isPaused,
    desktopNotification: state.settings.desktopNotification,
    notificationSound: state.settings.notificationSound,
    soundOption: state.settings.soundOption,
    notificationVolume: state.settings.notificationVolume,
    pomodoro: state.settings.pomodoroDuration,
    shortBreak: state.settings.shortBreakDuration,
    longBreak: state.settings.longBreakDuration,
  };
};

export default connect(mapStateToProps, {
  initializeTimer,
  tick,
  timerDone,
  pauseTimer,
  resumeTimer,
  exitTimer,
  deactivateTimer,
})(TimerContainer);
