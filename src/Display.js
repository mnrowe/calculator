import React from 'react';
import './Display.css';

const Display = ({ displayValue }) => (
  <div className="Display">
    <div className="display-box">
      <div className="display-text">{displayValue}</div>
    </div>
  </div>
);

export default Display;
