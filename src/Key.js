import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './Key.css';

class Key extends Component {
  render() {
    const { className, onPress, ...props } = this.props;
    return (
      <Button
        size={'medium'}
        className={`Key ${className}`}
        onClick={onPress}
        {...props}
      />
    );
  }
}

export default Key;
