import React from 'react';
import './Frame.css';
import Key from './Key';

const Frame = ({
  handleInputDigit,
  handleInputOperator,
  handleInputClearAll
}) => {
  return (
    <div className="Frame">
      <div className="frame-row">
        <Key
          color="blue"
          className="button-clear"
          onClick={() => handleInputClearAll()}
        >
          AC
        </Key>
      </div>
      <div className="frame-row">
        <Key className="button-7" onClick={() => handleInputDigit(7)}>
          7
        </Key>
        <Key className="button-8" onClick={() => handleInputDigit(8)}>
          8
        </Key>
        <Key className="button-9" onClick={() => handleInputDigit(9)}>
          9
        </Key>
        <Key className="button-%" onClick={() => handleInputOperator('%')}>
          %
        </Key>
      </div>
      <div className="frame-row">
        <Key className="button-4" onClick={() => handleInputDigit(4)}>
          4
        </Key>
        <Key className="button-5" onClick={() => handleInputDigit(5)}>
          5
        </Key>
        <Key className="button-6" onClick={() => handleInputDigit(7)}>
          6
        </Key>
        <Key className="button-*" onClick={() => handleInputOperator('*')}>
          *
        </Key>
      </div>
      <div className="frame-row">
        <Key className="button-1" onClick={() => handleInputDigit(1)}>
          1
        </Key>
        <Key className="button-2" onClick={() => handleInputDigit(2)}>
          2
        </Key>
        <Key className="button-3" onClick={() => handleInputDigit(3)}>
          3
        </Key>
        <Key className="button--" onClick={() => handleInputOperator('-')}>
          -
        </Key>
      </div>
      <div className="frame-row">
        <Key className="button-0" onClick={() => handleInputDigit(0)}>
          0
        </Key>
        <Key className="button--" onClick={() => handleInputOperator('.')}>
          .
        </Key>
        <Key className="button--" onClick={() => handleInputOperator('=')}>
          =
        </Key>
        <Key className="button--" onClick={() => handleInputOperator('+')}>
          +
        </Key>
      </div>
    </div>
  );
};

export default Frame;
