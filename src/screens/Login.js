import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';

import {connect} from 'react-redux';
import {loginUser} from '../../redux/actions/userActions';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  login = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
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
                error={errors.email}
                mode="outlined"
                value={this.state.email}
                label="Email"
                onChangeText={text => {
                  this.setState({email: text});
                }}
              />
              <TextInput
                error={errors.password}
                mode="outlined"
                value={this.state.password}
                label="Password"
                onChangeText={text => {
                  this.setState({password: text});
                }}
              />
              <Button
                color="#222"
                style={{
                  alignSelf: 'center',
                  marginTop: 15,
                }}
                loading={loading}
                mode="contained"
                onPress={this.login}
                width={150}>
                Log In
              </Button>
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={this.props.toSignup}>
              <Text style={{color: 'blue'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapActionsToProps = {loginUser};
const mapStateToProps = state => ({
  loading: state.UI.loading,
  errors: state.UI.errors,
});

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Login);
