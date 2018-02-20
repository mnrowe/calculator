import React, { Component } from 'react';
import './App.css';
import Frame from './Frame';
import Display from './Display';
import { calculate } from './operations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    };

    this.inputDigit = this.inputDigit.bind(this);
  }

  inputDigit(digit) {
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

  render() {
    return (
      <div className="App">
        <Display operation={this.state.operation} />
        <Frame
          inputDigit={this.inputDigit}
          onClick={event => this.handleButtonClick(event)}
        />
      </div>
    );
  }
}

export default App;
