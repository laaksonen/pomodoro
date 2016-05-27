import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleSettingsPanel } from '../settings';
import ToggleContainer from './ToggleContainer';
import SelectContainer from './SelectContainer';
import SliderContainer from './SliderContainer';

export default function SettingsContainer({
  settingsPanelOpen,
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
        <br />
        <SelectContainer />
        <br />
        <SliderContainer />
      </div>

    </div>
  );
}

const mapStateToProps = state => {
  return { settingsPanelOpen: state.settings.settingsPanelOpen };
};

export default connect(mapStateToProps, {
  toggleSettingsPanel,
})(SettingsContainer);
