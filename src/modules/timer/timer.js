export const INITIALIZE_TIMER = 'INITIALIZE_TIMER';
export const TICK = 'TICK';
export const TIMER_DONE = 'TIMER_DONE';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const RESUME_TIMER = 'RESUME_TIMER';
export const EXIT_TIMER = 'EXIT_TIMER';
export const DEACTIVE_TIMER = 'DEACTIVE_TIMER';

const initialState = {
  timerType: 'none',
  currentTime: 0,
  isActive: false,
  isPaused: false,
  completedCount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case INITIALIZE_TIMER:
    return {
      ...state,
      timerType: action.payload.timerType,
      currentTime: action.payload.duration * 60,
      isActive: true,
    };
  case TICK:
    return { ...state, currentTime: state.currentTime - 1 };
  case TIMER_DONE:
    return {
      ...state,
      timerType: 'none',
      isActive: false,
      completedCount: action.payload === 'pomodoro' ? state.completedCount + 1 :
      state.completedCount,
    };
  case PAUSE_TIMER:
    return { ...state, isPaused: true };
  case RESUME_TIMER:
    return { ...state, isActive: true, isPaused: false };
  case EXIT_TIMER:
    return {
      ...state,
      timerType: 'none',
      currentTime: 0,
      isPaused: false,
    };
  case DEACTIVE_TIMER:
    return { ...state, isActive: false };

  }
  return state;
}

export function initializeTimer(timerType, duration) {
  return {
    type: INITIALIZE_TIMER,
    payload: {
      timerType,
      duration,
    },
  };
}

export function tick() {
  return { type: TICK };
}

export function timerDone(timerType) {
  return {
    type: TIMER_DONE,
    payload: timerType,
  };
}

export function pauseTimer() {
  return { type: PAUSE_TIMER };
}

export function resumeTimer() {
  return { type: RESUME_TIMER };
}

export function exitTimer() {
  return { type: EXIT_TIMER };
}

export function deactivateTimer() {
  return { type: DEACTIVE_TIMER };
}
