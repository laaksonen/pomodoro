import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class NotFoundView extends Component {
  render() {
    return (
      <div className="container m-t-2">
        <Helmet title="Not Found" />
        <h3 style={{ textAlign: 'center' }}>Page Not Found</h3>
        <p style={{ textAlign: 'center' }}>Whoops! Sorry, there is nothing to see here.</p>
        <p style={{ textAlign: 'center' }}><Link to="/">Go back home</Link></p>
      </div>
    );
  }
}

export default NotFoundView;
