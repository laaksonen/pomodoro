import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';
import TimerSelection from './TimerSelection';
import TimerControls from './TimerControls';
import {
  initializeTimer,
  tick,
  timerDone,
  pauseTimer,
  resumeTimer,
  exitTimer,
  deactivateTimer,
 } from '../../timer/timer';

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
      <div>
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
