import React from 'react';
import './Frame.css';
import Button from './Button';

const Frame = ({ inputDigit }) => {
  return (
    <div className="Frame">
      <div className="frame-row">
        <Button className="button-7" onClick={() => inputDigit(7)}>
          7
        </Button>
        <Button className="button-8" onClick={() => inputDigit(8)}>
          8
        </Button>
        <Button className="button-9" onClick={() => inputDigit(9)}>
          9
        </Button>
        <Button className="button-%">%</Button>
      </div>
      <div className="frame-row">
        <Button className="button-4" onClick={() => inputDigit(4)}>
          4
        </Button>
        <Button className="button-5" onClick={() => inputDigit(5)}>
          5
        </Button>
        <Button className="button-6" onClick={() => inputDigit(6)}>
          6
        </Button>
        <Button className="button-multiply">x</Button>
      </div>
    </div>
  );
};

export default Frame;
