import React from 'react';
import './Frame.css';
import Button from './Button';

const Frame = props => {
  return (
    <div className="Frame">
      {props.layout.map(item => {
        return (
          <Button
            onClick={event => props.onClick(event)}
            key={item}
            value={item}
          />
        );
      })}
    </div>
  );
};

export default Frame;
