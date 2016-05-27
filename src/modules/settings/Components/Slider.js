import React from 'react';

export default function Slider({ title, duration, setDuration, min, max }) {
  return (
    <div className="mt2 mb2">
      <span>
        {title}: {duration}&nbsp;
        {duration === '1' ? 'minute' : 'minutes'}
      </span>
      <input
        style={{ width: '100%', outline: 0 }}
        type="range"
        min={min}
        max={max}
        step={1}
        value={duration}
        onChange={(event) => {
          setDuration(event.target.value);
        }}
      />
    </div>
  );
}
