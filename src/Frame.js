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
      <div className="frame-row">
        <Button className="button-clear" onClick={() => handleInputClearAll()}>
          AC
        </Button>
      </div>
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
        <Button className="button-6" onClick={() => handleInputDigit(7)}>
          6
        </Button>
        <Button className="button-*" onClick={() => handleInputOperator('*')}>
          *
        </Button>
      </div>
      <div className="frame-row">
        <Button className="button-1" onClick={() => handleInputDigit(1)}>
          1
        </Button>
        <Button className="button-2" onClick={() => handleInputDigit(2)}>
          2
        </Button>
        <Button className="button-3" onClick={() => handleInputDigit(3)}>
          3
        </Button>
        <Button className="button--" onClick={() => handleInputOperator('-')}>
          -
        </Button>
      </div>
      <div className="frame-row">
        <Button className="button-0" onClick={() => handleInputDigit(0)}>
          0
        </Button>
        <Button className="button--" onClick={() => handleInputOperator('.')}>
          .
        </Button>
        <Button className="button--" onClick={() => handleInputOperator('=')}>
          =
        </Button>
        <Button className="button--" onClick={() => handleInputOperator('+')}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Frame;
