import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import store from './src/store'; //Import the store
import News from './src/Containers/News/News'; //Import the component file

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render() {
    return (
        <Provider store={store}>
          <News />
        </Provider>
    );
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
}, {
  initialRouteName: 'Home'
});

export default class App extends Component {
  render() {
    return (
        <RootStack />
    );
  }
}
