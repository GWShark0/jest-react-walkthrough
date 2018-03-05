import React, { Component } from 'react';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Greeting name="World" />
      </div>
    );
  }
}

export default App;
