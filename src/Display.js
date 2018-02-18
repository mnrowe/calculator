import React from 'react';
import './Display.css';

const Display = props => (
  <div className="Display">
    <div className="display-box">
      <div className="display-text">{props.operation}</div>
    </div>
  </div>
);

export default Display;
