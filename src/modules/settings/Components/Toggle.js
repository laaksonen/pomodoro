import React from 'react';

export default function Toggle({
  desktopNotification,
  toggleDesktopNotification,
  label,
}) {
  return (
    <div>
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
      {label}
    </div>
  );
}
