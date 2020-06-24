import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
//Redux
import {Provider} from 'react-redux';
import store from './redux/store';

AppRegistry.registerComponent(appName, () => appWrap);

const appWrap = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
