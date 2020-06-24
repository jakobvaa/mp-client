import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {Title, Paragraph, Divider} from 'react-native-paper';

export class EventScreen extends Component {
  static propTypes = {};

  render() {
    const {item} = this.props.route.params;

    return (
      <View>
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>Time: {item.date}</Paragraph>
        <View style={{height: 30}} />
        <Text>{JSON.stringify(item)}</Text>
      </View>
    );
  }
}

export default EventScreen;
