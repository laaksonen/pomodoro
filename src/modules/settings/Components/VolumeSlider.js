import React from 'react';

export default function VolumeSlider({
  notificationVolume,
  setNotificationVolume,
}) {
  return (
    <div className="mt2 mb2">
      <span>Notification volume: {notificationVolume} %</span>
      <input
        style={{ width: '100%', outline: 0 }}
        type="range"
        min={0}
        max={100}
        step={1}
        value={notificationVolume}
        onChange={(event) => {
          setNotificationVolume(event.target.value);
        }}
      />
    </div>
  );
}
