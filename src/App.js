import React, { Component } from 'react';
import { SUPER_NICE } from './colors';
import Counter from './Counter';
import Field from './input/Field';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleChange(value) {
    this.setState({value});
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <Counter increment={1} color={SUPER_NICE} />
        <h2>Join or Login</h2>
        <Field
          onChange={this.handleChange.bind(this)}
          value={value}
          id="email"
          placeholder="you@example.com"
          help="Enter your email please."
        />
      </div>
    );
  }
}
