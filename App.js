import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

// Redux
import {connect} from 'react-redux';
import store from './redux/store';
import {SET_AUTHENTICATED, LOADING_UI, LOADING_DONE} from './redux/types';

// RN paper
import {ActivityIndicator, Text, Colors} from 'react-native-paper';

import jwtDecode from 'jwt-decode';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// Components
import AuthSwitch from './src/util/AuthSwitch';
import Home from './src/screens/Home';
import Main from './src/screens/Main';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
    };
  }
  async componentDidMount() {
    await this.checkAuth();
  }

  checkAuth = async () => {
    store.dispatch({type: LOADING_UI});
    const token = await AsyncStorage.getItem('FBIdToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      // Check if the token is still valid
      if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch({type: LOADING_DONE});
      } else {
        axios.defaults.headers.common['Authorization'] = token;

        store.dispatch({type: SET_AUTHENTICATED});
        store.dispatch({type: LOADING_DONE});
      }
    }
    this.setState({initialLoading: false});
  };

  render() {
    const {authenticated} = this.props;
    if (this.state.initialLoading) {
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1, justifyContent: 'space-around'}}>
            <ActivityIndicator
              animating={true}
              color={Colors.yellow700}
              size={'large'}
            />
          </SafeAreaView>
        </>
      );
    }
    if (authenticated) {
      return (
        <>
          <SafeAreaView style={{flex: 1}}>
            <Main />
          </SafeAreaView>
        </>
      );
    } else {
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>
            <AuthSwitch />
          </SafeAreaView>
        </>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    loading: state.UI.loading,
    authenticated: state.user.authenticated,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
