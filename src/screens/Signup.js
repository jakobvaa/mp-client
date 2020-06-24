import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

import {connect} from 'react-redux';
import {signupUser} from '../../redux/actions/userActions';

export class Signup extends Component {
  state = {
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
  };
  signup = () => {
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      confirmPassword: this.state.confirmPassword,
    };
    this.props.signupUser(newUserData);
  };
  render() {
    const {loading, errors} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#FFC400'}}>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}} />
          <View
            style={{
              flex: 8,
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 50,
                  alignSelf: 'center',
                  paddingBottom: 50,
                  color: '#222',
                }}>
                meet peeps
              </Text>

              <TextInput
                mode="outlined"
                value={this.state.email}
                label="Email"
                onChangeText={text => {
                  this.setState({email: text});
                }}
              />
              <TextInput
                mode="outlined"
                value={this.state.username}
                label="username"
                onChangeText={text => {
                  this.setState({username: text});
                }}
              />
              <TextInput
                mode="outlined"
                value={this.state.password}
                label="Password"
                onChangeText={text => {
                  this.setState({password: text});
                }}
              />
              <TextInput
                mode="outlined"
                value={this.state.confirmPassword}
                label="Confirm Password"
                onChangeText={text => {
                  this.setState({confirmPassword: text});
                }}
              />
              <Button
                color="#222"
                loading={loading}
                style={{
                  alignSelf: 'center',
                  marginTop: 15,
                }}
                mode="contained"
                onPress={this.signup}
                width={150}>
                Sign Up
              </Button>
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={this.props.toLogin}>
              <Text style={{color: 'blue'}}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapActionsToProps = {signupUser};
const mapStateToProps = state => ({
  loading: state.UI.loading,
  errors: state.UI.errors,
});

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Signup);
