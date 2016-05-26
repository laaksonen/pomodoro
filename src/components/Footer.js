import React, { Component } from 'react';
import CompletedCount from '../modules/timer/Containers/CompletedCount';
import SettingsButton from '../modules/settings/Containers/SettingsButton';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer pa3 f4">
        <CompletedCount />
        <SettingsButton />
      </div>
    );
  }
}
