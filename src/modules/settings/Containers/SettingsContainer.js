import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleSettingsPanel } from '../settings';
import ToggleContainer from './ToggleContainer';

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
        <span className="settings-divider" />
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
