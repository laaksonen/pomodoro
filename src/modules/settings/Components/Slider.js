import React from 'react';

export default function Slider({ duration, setDuration, min, max }) {
  return (
    <div>
      <input
        style={{ width: '200px' }}
        type="range"
        min={min}
        max={max}
        step={1}
        value={duration}
        onChange={(event) => {
          setDuration(event.target.value);
        }}
      />
      {duration}



    </div>
  );
}
