import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return (
      <h1 className="greeting">
        Hello, {this.props.name}!
      </h1>
    );
  }
}

export default Greeting;
