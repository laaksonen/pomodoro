export const TOGGLE_SETTINGS_PANEL = 'TOGGLE_SETTINGS_PANEL';
export const TOGGLE_DESKTOP_NOTIFICATION = 'TOGGLE_DESKTOP_NOTIFICATION';
export const TOGGLE_NOTIFICATION_SOUND = 'TOGGLE_NOTIFICATION_SOUND';
export const SET_POMODORO_DURATION = 'SET_POMODORO_DURATION';
export const SET_SHORT_BREAK_DURATION = 'SET_SHORT_BREAK_DURATION';
export const SET_LONG_BREAK_DURATION = 'SET_LONG_BREAK_DURATION';

const initialState = {
  settingsPanelOpen: false,
  desktopNotification: false,
  notificationSound: true,
  soundOption: 'option1',
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
  case TOGGLE_NOTIFICATION_SOUND:
    return { ...state, notificationSound: !state.notificationSound };
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

export function toggleNotificationSound() {
  return { type: TOGGLE_NOTIFICATION_SOUND };
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
