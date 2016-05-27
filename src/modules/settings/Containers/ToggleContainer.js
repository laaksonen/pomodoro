import React from 'react';
import { connect } from 'react-redux';
import Toggle from '../Components/Toggle';
import {
  toggleDesktopNotification,
  toggleNotificationSound,
} from '../settings';

function ToggleContainer({
  desktopNotification,
  notificationSound,
  toggleDesktopNotification,
  toggleNotificationSound,
 }) {
  return (
    <div>
      <Toggle
        desktopNotification={desktopNotification}
        toggleDesktopNotification={toggleDesktopNotification}
        label="Desktop notifications"
      />

      <Toggle
        desktopNotification={notificationSound}
        toggleDesktopNotification={toggleNotificationSound}
        label="Notification sounds"
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    desktopNotification: state.settings.desktopNotification,
    notificationSound: state.settings.notificationSound,
  };
};

export default connect(mapStateToProps, {
  toggleDesktopNotification,
  toggleNotificationSound,
})(ToggleContainer);
