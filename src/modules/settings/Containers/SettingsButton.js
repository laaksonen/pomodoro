import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSettingsPanel } from '../settings';

class SettingsButton extends Component {
  render() {
    return (
      <div>
        <i
          className="fa fa-cog"
          style={{ cursor: 'pointer' }}
          aria-hidden="true"
          onClick={() => this.props.toggleSettingsPanel()}
        >
        </i>
      </div>
    );
  }
}

export default connect(null, { toggleSettingsPanel })(SettingsButton);
