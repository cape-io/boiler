import React, { Component, PropTypes } from 'react';
import Counter from '../components/Counter';
export default class CounterContainer extends Component {

  static propTypes = {
    route: PropTypes.shape({
      color: PropTypes.string.isRequired,
      increment: PropTypes.number.isRequired,
    }),
  }

  render() {
    const {route: {color, increment}} = this.props;
    return <Counter color={color} increment={increment} />;
  }
}
