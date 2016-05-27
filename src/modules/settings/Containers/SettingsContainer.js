import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleSettingsPanel } from '../settings';
import ToggleContainer from './ToggleContainer';
import SelectContainer from './SelectContainer';
import SliderContainer from './SliderContainer';

export default function SettingsContainer({
  settingsPanelOpen,
  notificationSound,
  toggleSettingsPanel,
}) {
  const settingsContainerClass = classNames(
    'settings-container',
    { 'dn': !settingsPanelOpen }
  );

  return (
    <div className={settingsContainerClass}>
      <div className="settings-panel">
        <div className="settings-panel-close">
            <span onClick={() => toggleSettingsPanel()}>×</span>
        </div>
        <ToggleContainer />
        {notificationSound ?
          <SelectContainer /> : null
        }
        <SliderContainer />
      </div>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    settingsPanelOpen: state.settings.settingsPanelOpen,
    notificationSound: state.settings.notificationSound,
  };
};

export default connect(mapStateToProps, {
  toggleSettingsPanel,
})(SettingsContainer);
