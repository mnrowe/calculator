import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  handleClick(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <button
        value={this.props.value}
        onClick={this.props.onClick}
        className="Button"
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
