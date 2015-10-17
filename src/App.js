import React, { Component, PropTypes } from 'react';

export class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    const {children} = this.props;
    return (
      <div className="container">
        { children }
      </div>
    );
  }
}
