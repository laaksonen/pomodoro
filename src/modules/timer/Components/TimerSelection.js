import React from 'react';

export default function TimerSelection({ startTimer, isActive }) {
  return (
    <div>
      <div className="ma3">
        <button
          className="btn btn-raised-red"
          onClick={() => {
            if (!isActive) {
              startTimer('pomodoro');
            }
          }}
        >
          Pomodoro
        </button>
      </div>

      <div className="ma3">
        <button
          className="btn btn-raised-red"
          onClick={() => {
            if (!isActive) {
              startTimer('shortBreak');
            }
          }}
        >
          Short break
        </button>
      </div>

      <div className="ma3">
        <button
          className="btn btn-raised-red"
          onClick={() => {
            if (!isActive) {
              startTimer('longBreak');
            }
          }}
        >
          Long break
        </button>
      </div>
    </div>
  );

}
