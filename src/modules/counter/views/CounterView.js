import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { actions } from '../counter';
import Counter from '../components/Counter';

class CounterView extends Component {

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <div>
        <Helmet title="Counter" />
        <Counter counter={counter} increment={increment} decrement={decrement} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect((mapStateToProps), actions)(CounterView);
