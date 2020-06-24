import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export class Profile extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={{backgroundColor: '#aa2299', flex: 1}}>
        <Text>This is the profile screen</Text>
      </View>
    );
  }
}

export default Profile;
