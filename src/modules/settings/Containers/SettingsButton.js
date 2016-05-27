import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSettingsPanel } from '../settings';

class SettingsButton extends Component {
  render() {
    return (
      <div className="settings-button f3">
        <i
          className="fa fa-cog"
          style={{ cursor: 'pointer' }}
          aria-hidden="true"
          onClick={() => this.props.toggleSettingsPanel()}
        />
      </div>
    );
  }
}

export default connect(null, { toggleSettingsPanel })(SettingsButton);
