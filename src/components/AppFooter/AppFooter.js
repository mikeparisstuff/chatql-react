import React, { Component } from 'react';
import logo from '../../assets/img/AWS_logo_RGB.png';

class AppFooter extends Component {
  render() {
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container">
            <span className="text-muted mx-auto">
                Powered by <img className="awslogo mx-1" width='35px' src={logo} alt="AWS" /> AppSync
            </span>
            </div>
        </nav>
    );
  }
}

export default AppFooter;
