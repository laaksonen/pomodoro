import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

export default function SettingsPanelContainer({
  settingsPanelOpen,
}) {
  const settingsPanelContainerClass = classNames(
    'settings-panel-container',
    { 'settings-panel-open': settingsPanelOpen }
  );

  return (
    <div className={settingsPanelContainerClass}>

    </div>
  );
}

const mapStateToProps = state => {
  return { settingsPanelOpen: state.settings.settingsPanelOpen };
};

export default connect(mapStateToProps)(SettingsPanelContainer);
