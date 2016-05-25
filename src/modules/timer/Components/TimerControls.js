import React from 'react';
import classNames from 'classnames';

export default function TimerControls({
  timerType,
  isPaused,
  pauseTimer,
  restartTimer,
  exitTimer,
}) {

  const buttonClass = classNames({
    'btn btn-raised-red': timerType === 'pomodoro',
    'btn btn-raised-blue': timerType === 'shortBreak',
    'btn btn-raised-green': timerType === 'longBreak',
  });

  return (
    <div>
      <div className="ma3">
        {isPaused ?
          <button
            className={buttonClass}
            onClick={() => restartTimer()}
          >
            Resume
          </button> :
          <button
            className={buttonClass}
            onClick={() => pauseTimer()}
          >
            Pause
          </button>
        }
      </div>
      <div className="ma3">
        <button
          className={buttonClass}
          onClick={() => exitTimer()}
        >
          Exit
        </button>
      </div>
    </div>
  );
}
