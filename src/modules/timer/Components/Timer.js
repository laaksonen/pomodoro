import React from 'react';
import { zeroPad } from '../utils';

export default function Timer({ currentTime }) {
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime - minutes * 60;
  return (
    <div className="ma2 f-subheadline">
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </div>
  );
}
