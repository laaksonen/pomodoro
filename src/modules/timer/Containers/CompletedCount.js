import React, { Component } from 'react';
import { connect } from 'react-redux';

class CompletedCount extends Component {
  render() {
    return <div>Completed: {this.props.completedCount}</div>;
  }
}

const mapStateToProps = (state) => {
  return { completedCount: state.timer.completedCount };
};

export default connect(mapStateToProps)(CompletedCount);
