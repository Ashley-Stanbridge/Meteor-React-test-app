import React, { Component } from 'react';

import HelloGay from './HelloGay';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <HelloGay />
      </div>
    );
  }
}
