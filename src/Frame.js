import React from 'react';
import './Frame.css';
import Button from './Button';

const Frame = props => {
  return (
    <div className="Frame">
      {props.layout.map(num => {
        return (
          <Button
            onClick={event => props.onClick(event)}
            key={num}
            value={num}
          />
        );
      })}
    </div>
  );
};

export default Frame;
