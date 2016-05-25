import React, { Component } from 'react';
import { connect } from 'react-redux';

class TimerSettings extends Component {
  render() {
    return (
      <div>
        <i className="fa fa-cog" aria-hidden="true"></i>
      </div>
    );
  }
}

export default connect()(TimerSettings);
