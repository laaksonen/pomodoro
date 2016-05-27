import React from 'react';
import { connect } from 'react-redux';
import {
  setNotificationVolume,
  setPomodoroDuration,
  setShortBreakDuration,
  setLongBreakDuration,
} from '../settings';
import VolumeSlider from '../Components/VolumeSlider';
import DurationSlider from '../Components/DurationSlider';


function SilderContainer({
  notificationSound,
  notificationVolume,
  pomodoroDuration,
  shortBreakDuration,
  longBreakDuration,
  setNotificationVolume,
  setPomodoroDuration,
  setShortBreakDuration,
  setLongBreakDuration,
}) {
  return (
    <div className="mt4 mb3">
      {notificationSound ?
        <VolumeSlider
          notificationVolume={notificationVolume}
          setNotificationVolume={setNotificationVolume}
        /> : null
      }
      <DurationSlider
        title="Pomodoro session"
        duration={pomodoroDuration}
        setDuration={setPomodoroDuration}
        min={15}
        max={90}
      />
      <DurationSlider
          title="Short break"
          duration={shortBreakDuration}
          setDuration={setShortBreakDuration}
          min={1}
          max={15}
      />
      <DurationSlider
          title="Long break"
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
    notificationSound: state.settings.notificationSound,
    notificationVolume: state.settings.notificationVolume,
    pomodoroDuration: state.settings.pomodoroDuration,
    shortBreakDuration: state.settings.shortBreakDuration,
    longBreakDuration: state.settings.longBreakDuration,
  };
};

export default connect(mapStateToProps, {
  setNotificationVolume,
  setPomodoroDuration,
  setShortBreakDuration,
  setLongBreakDuration,
})(SilderContainer);
