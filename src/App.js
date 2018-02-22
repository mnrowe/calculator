import React, { Component } from 'react';
import './App.css';
import Frame from './Frame';
import Display from './Display';
import calculate from './operations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    };

    this.handleInputDigit = this.handleInputDigit.bind(this);
    this.handleInputOperator = this.handleInputOperator.bind(this);
    this.handleInputClearAll = this.handleInputClearAll.bind(this);
    this.handleClearDisplay = this.handleClearDisplay.bind(this);
  }

  handleInputClearAll() {
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    });
  }

  handleClearDisplay() {
    this.setState({
      displayValue: '0'
    });
  }

  handleInputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      });
    } else {
      this.setState({
        displayValue:
          displayValue === '0' ? String(digit) : displayValue + digit
      });
    }
  }

  handleInputOperator(nextOperator) {
    const { value, displayValue, operator } = this.state;
    const inputValue = parseFloat(displayValue);

    if (value === null) {
      this.setState({
        value: inputValue
      });
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = calculate[operator](currentValue, inputValue);

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    });
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="App">
        <Display displayValue={displayValue} />
        <Frame
          handleInputDigit={this.handleInputDigit}
          handleInputOperator={this.handleInputOperator}
          handleInputClearAll={this.handleInputClearAll}
          onClick={event => this.handleButtonClick(event)}
        />
      </div>
    );
  }
}

export default App;
