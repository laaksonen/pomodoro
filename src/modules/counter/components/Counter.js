import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div>
        <div>
          <button type="button" onClick={decrement}>-</button>
          <button type="button" onClick={increment}>+</button>
        </div>
        <p>Count: {counter}</p>
      </div>
    );
  }
}
