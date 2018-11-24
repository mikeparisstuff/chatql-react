import React, { Component } from 'react';
import { Analytics, Auth } from 'aws-amplify';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './bootstrap/css/bootstrap.min.css'
import './App.css';
import AppNav from './components/AppNav'
import AppFooter from './components/AppFooter'
import Home from './components/Home'
import Chat from './components/Chat'
import AuthContext from './AuthContext';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    Analytics.startSession();
    window.addEventListener('beforeunload', () => {
      Analytics.stopSession();
    })
    Auth.currentAuthenticatedUser().then(user => {
      this.updateCurrentUser(user)
    });
  }

  updateCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  onSignOut = async () => {
    await Auth.signOut();
    this.setState({
      currentUser: null
    })
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.currentUser}>
        <Router>
          <div className="App">
            <AppNav loggedInUser={this.state.currentUser} onSignOut={this.onSignOut} />
            <Route 
              exact 
              path="/"
              render={() => <Home onLogin={this.updateCurrentUser} />} 
            />
            <Route path="/chat" component={Chat} />
          </div>
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default App;
