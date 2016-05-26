export const TOGGLE_SETTINGS_PANEL = 'TOGGLE_SETTINGS_PANEL';

const initialState = {
  settingsPanelOpen: false,
  desktopNotification: true,
  pomodoroDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 10,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_SETTINGS_PANEL:
    return { ...state, settingsPanelOpen: !state.settingsPanelOpen };
  }

  return state;
}

export function toggleSettingsPanel() {
  return { type: TOGGLE_SETTINGS_PANEL };
}
