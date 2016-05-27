import React from 'react';
import { connect } from 'react-redux';
import Toggle from '../Components/Toggle';
import { toggleDesktopNotification } from '../settings';

function ToggleContainer({ desktopNotification, toggleDesktopNotification }) {
  return (
    <div>
      <Toggle
        desktopNotification={desktopNotification}
        toggleDesktopNotification={toggleDesktopNotification}
        label="Desktop notifications"
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    desktopNotification: state.settings.desktopNotification,
  };
};

export default connect(mapStateToProps, { toggleDesktopNotification })(ToggleContainer);
