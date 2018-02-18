import React, { Component } from 'react';
import './App.css';
import Frame from './Frame';
import Display from './Display';
import { calculate } from './operations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: '',
      total: '',
      lastOperator: '',
      layout: [7, 8, 9, '%', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '+', '=', 'AC']
    };
  }
  handleButtonClick(event) {
    const { value } = event.target;
    const { lastOperator } = this.state;

    debugger;
    switch (value) {
      case 'AC':
        this.setState({ operation: '' });
        break;
      case '7':
      case '8':
      case '9':
      case '4':
      case '5':
      case '6':
      case '1':
      case '2':
      case '3':
      case '0':
        this.setState(prevState => ({
          operation: prevState.operation + value
        }));
        break;
      case '.' && lastOperator !== '.':
      case 'x':
      case '-':
      case '%':
      case '+' && lastOperator !== '+':
        this.setState(prevState => ({
          operation: prevState.operation + ` ${value} `,
          lastOperator: value
        }));
      case '=':
        calculate(this.state.operation);
    }
  }
  render() {
    return (
      <div className="App">
        <Display operation={this.state.operation} />
        <Frame
          layout={this.state.layout}
          onClick={event => this.handleButtonClick(event)}
          isClear={this.state.isClear}
        />
      </div>
    );
  }
}

export default App;
