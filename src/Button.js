import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  renderButton() {
    const { value } = this.props;

    return (
      <button
        value={this.props.value}
        onClick={this.props.onClick}
        className={'Button'}
      >
        {this.props.value}
      </button>
    );
  }

  render() {
    {
      return this.renderButton();
    }
  }
}

export default Button;
