import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { className, onPress, ...props } = this.props;
    return (
      <button className={`Button ${className}`} onClick={onPress} {...props} />
    );
  }
}

export default Button;
