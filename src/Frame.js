import React from 'react';
import './Frame.css';
import Button from './Button';

const Frame = ({
  handleInputDigit,
  handleInputOperator,
  handleInputClearAll
}) => {
  return (
    <div className="Frame">
      <div className="frame-row" />
      <Button className="button-clear" onClick={() => handleInputClearAll()}>
        C
      </Button>
      <div className="frame-row">
        <Button className="button-7" onClick={() => handleInputDigit(7)}>
          7
        </Button>
        <Button className="button-8" onClick={() => handleInputDigit(8)}>
          8
        </Button>
        <Button className="button-9" onClick={() => handleInputDigit(9)}>
          9
        </Button>
        <Button className="button-%" onClick={() => handleInputOperator('%')}>
          %
        </Button>
      </div>
      <div className="frame-row">
        <Button className="button-4" onClick={() => handleInputDigit(4)}>
          4
        </Button>
        <Button className="button-5" onClick={() => handleInputDigit(5)}>
          5
        </Button>
        <Button className="button-6" onClick={() => handleInputDigit(6)}>
          6
        </Button>
        <Button
          className="button-multiply"
          onClick={() => handleInputOperator('*')}
        >
          *
        </Button>
        <div className="frame-row">
          <Button
            className="button-equals"
            onClick={() => handleInputOperator('=')}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
