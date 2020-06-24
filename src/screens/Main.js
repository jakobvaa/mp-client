import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from 'react-native-paper';

import Home from './ConnectedHome';
import Profile from './ConnectedProfile';
import EventScreen from './EventScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: '#444',
          style: {backgroundColor: '#FFC400'},
          indicatorStyle: {backgroundColor: 'black'},
        }}>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Map" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Event" component={EventScreen} />
    </Stack.Navigator>
  );
}
export class Main extends Component {
  render() {
    return <TabNav />;
  }
}

export default Main;
