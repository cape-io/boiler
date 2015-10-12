import React, { Component } from 'react';
import { SUPER_NICE } from './colors';
import Counter from './Counter';
import Email from './containers/Email';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter increment={1} color={SUPER_NICE} />
        <h2>Join or Login</h2>
        <Email />
      </div>
    );
  }
}
