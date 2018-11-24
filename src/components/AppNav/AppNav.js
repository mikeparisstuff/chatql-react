import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import './AppNav.css';

class AppNav extends Component {

    render() {
        console.log(this.props.location);
        if (this.props.location.pathname !== '/' && !this.props.loggedInUser) {
            return <Redirect to="/" />
        } else if (this.props.location.pathname === '/' && this.props.loggedInUser) {
            return <Redirect to="/chat" />
        }
        return (
            <nav className="navbar navbar-primary fixed-top">
                <a className="navbar-brand text-white" href='/'>
                    <strong>ChatQL In Development</strong>
                </a>
                <ul className="nav navbar-nav">
                    {
                        this.props.loggedInUser ?
                        <li className="nav-item">
                            <span className="nav-user">{this.props.loggedInUser.username}</span>
                            <button className="btn btn-primary" onClick={this.props.onSignOut}>Sign Out <i className="ion-log-in" data-pack="default" data-tags="sign in"></i></button>
                        </li> :
                        null
                    }
                </ul>
            </nav>
        );
    }
}

export default withRouter(AppNav);
