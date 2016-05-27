import React from 'react';

export default function Toggle({
  desktopNotification,
  toggleDesktopNotification,
  label,
}) {
  return (
    <div className="mb3 mt3">
      <input
        type="checkbox"
        checked={desktopNotification}
        onChange={() => {
          if (desktopNotification) {
            toggleDesktopNotification();
          } else {
            Notification.requestPermission((permission) => {
              if (permission === 'granted') {
                toggleDesktopNotification();
              }
            });
          }
        }}
      />
      &nbsp;{label}
    </div>
  );
}
