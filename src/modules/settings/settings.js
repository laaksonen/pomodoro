export const TOGGLE_SETTINGS_PANEL = 'TOGGLE_SETTINGS_PANEL';
export const TOGGLE_DESKTOP_NOTIFICATION = 'TOGGLE_DESKTOP_NOTIFICATION';
export const SET_POMODORO_DURATION = 'SET_POMODORO_DURATION';
export const SET_SHORT_BREAK_DURATION = 'SET_SHORT_BREAK_DURATION';
export const SET_LONG_BREAK_DURATION = 'SET_LONG_BREAK_DURATION';

const initialState = {
  settingsPanelOpen: false,
  desktopNotification: false,
  pomodoroDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 10,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_SETTINGS_PANEL:
    return { ...state, settingsPanelOpen: !state.settingsPanelOpen };
  case TOGGLE_DESKTOP_NOTIFICATION:
    return { ...state, desktopNotification: !state.desktopNotification };
  case SET_POMODORO_DURATION:
    return { ...state, pomodoroDuration: action.payload };
  case SET_SHORT_BREAK_DURATION:
    return { ...state, shortBreakDuration: action.payload };
  case SET_LONG_BREAK_DURATION:
    return { ...state, longBreakDuration: action.payload };

  }

  return state;
}

export function toggleSettingsPanel() {
  return { type: TOGGLE_SETTINGS_PANEL };
}

export function toggleDesktopNotification() {
  return { type: TOGGLE_DESKTOP_NOTIFICATION };
}

export function setPomodoroDuration(value) {
  return {
    type: SET_POMODORO_DURATION,
    payload: value,
  };
}

export function setShortBreakDuration(value) {
  return {
    type: SET_SHORT_BREAK_DURATION,
    payload: value,
  };
}

export function setLongBreakDuration(value) {
  return {
    type: SET_LONG_BREAK_DURATION,
    payload: value,
  };
}
