import React, { Component } from 'react';
import './App.css';
import Frame from './Frame';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      layout: [7, 8, 9, '%', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '+', '=']
    };
  }
  handleButtonClick(event) {
    const { value } = event.target;
    const numbers = this.state.layout.filter(num => typeof num === 'number');
    const operators = this.state.layout.filter(num => typeof num === 'string');
    this.setState({ ...this.state, input: value });
  }
  render() {
    return (
      <div className="App">
        <Display value={this.state.input} />
        <Frame
          layout={this.state.layout}
          onClick={event => this.handleButtonClick(event)}
        />
      </div>
    );
  }
}

export default App;
