import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

// React native paper
import {
  ActivityIndicator,
  Colors,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

export class Home extends Component {
  componentDidMount() {
    this.props.getAllEvents();
  }
  render() {
    const {events, loading} = this.props;
    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <ActivityIndicator
            animating={true}
            color={Colors.yellow700}
            size={'large'}
          />
        </View>
      );
    }
    return (
      <>
        <FlatList
          data={events}
          renderItem={({item}) => (
            <EventItem item={item} navigation={this.props.navigation} />
          )}
          keyExtractor={item => item.eventId}
        />
      </>
    );
  }
}

const EventItem = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Event', {item: props.item})}>
      <Card style={{marginHorizontal: 1, marginVertical: 2}}>
        <Card.Content>
          <Title>{props.item.title}</Title>
          <Paragraph>{props.item.description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default Home;
