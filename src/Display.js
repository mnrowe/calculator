import React from 'react';
import './Display.css';

const Display = props => (
  <div className="Display">
    <div className="display-text">{props.value}</div>
  </div>
);

export default Display;
