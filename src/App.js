import React, { Component } from 'react';
import { SUPER_NICE } from './colors';
import Counter from './Counter';

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={SUPER_NICE} />
      </div>
    );
  }
}
