import React from 'react';
import { connect } from 'react-redux';
import {
  setPomodoroDuration,
  setShortBreakDuration,
  setLongBreakDuration,
} from '../settings';
import Slider from '../Components/Slider';

function SilderContainer({
  pomodoroDuration,
  shortBreakDuration,
  longBreakDuration,
  setPomodoroDuration,
  setShortBreakDuration,
  setLongBreakDuration,
}) {
  return (
    <div>
      <span>Pomodoro</span>
      <Slider
        duration={pomodoroDuration}
        setDuration={setPomodoroDuration}
        min={15}
        max={90}
      />
      <br />
      <span>Short break</span>
      <Slider
        duration={shortBreakDuration}
        setDuration={setShortBreakDuration}
        min={1}
        max={15}
      />
      <br />
      <span>Long break</span>
      <Slider
        duration={longBreakDuration}
        setDuration={setLongBreakDuration}
        min={5}
        max={30}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pomodoroDuration: state.settings.pomodoroDuration,
    shortBreakDuration: state.settings.shortBreakDuration,
    longBreakDuration: state.settings.longBreakDuration,
  };
};

export default connect(mapStateToProps, {
  setPomodoroDuration,
  setShortBreakDuration,
  setLongBreakDuration,
})(SilderContainer);
