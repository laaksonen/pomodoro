import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleSettingsPanel } from '../settings';
import ToggleContainer from './ToggleContainer';
import SliderContainer from './SliderContainer';
import ReactRangeSlider from 'react-rangeslider';
import ReactSlider from 'react-slider';

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
