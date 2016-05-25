import React from 'react';

export default function TimerSelection({ timerType, startTimer }) {
  return (
    <div>
      <div className="ma3">
        <button
          className="btn btn-raised-red"
          onClick={() => { startTimer('pomodoro'); }}
        >
          Pomodoro
        </button>
      </div>

      <div className="ma3">
        <button
          className="btn btn-raised-red"
          onClick={() => { startTimer('shortBreak'); }}
        >
          Short break
        </button>
      </div>

      <div className="ma3">
        <button
          className="btn btn-raised-red"
          onClick={() => { startTimer('longBreak'); }}
        >
          Long break
        </button>
      </div>
    </div>
  );

}
