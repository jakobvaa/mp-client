import React, {Component} from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export class AuthSwitch extends Component {
  state = {
    mode: 'login',
  };

  setMode = mode => {
    this.setState({mode});
  };
  render() {
    switch (this.state.mode) {
      case 'login':
        return <Login toSignup={() => this.setMode('signup')} />;
      case 'signup':
        return <Signup toLogin={() => this.setMode('login')} />;
    }
  }
}

export default AuthSwitch;
