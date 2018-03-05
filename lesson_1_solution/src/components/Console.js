import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';

import './Console.css';

class Console extends Component {
  state = {
    code: ''
  }

  switchCode = (code) => {
    if (code === this.state.code) {
      this.setState({ code: '' });
    } else {
      this.setState({ code });
    }
  }

  render() {
    const className = classNames(
      'console',
      { [`console--${this.state.code}`]: !!this.state.code },
    );

    return (
      <div className={className}>
        <Button
          className="green-button"
          onClick={() => this.switchCode('green')}
        >
          Code Green
        </Button>
        <Button
          className="yellow-button"
          onClick={() => this.switchCode('yellow')}
        >
          Code Yellow
        </Button>
        <Button
          className="red-button"
          onClick={() => this.switchCode('red')}
        >
          Code Red
        </Button>
      </div>
    );
  }
}

export default Console;
