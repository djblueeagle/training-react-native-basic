/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View, 
  Button,
  Text
} from 'react-native';
import ViewCountComponent from './src/ViewCountComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  addCount = () => {
    const {count} = this.state;
    this.setState({
      count: count + 1,
    });
  }

  subtractCount = () => {
    const {count} = this.state;
    this.setState({
      count: count - 1,
    });
  }

  render() {
    return (
      <View style={appStyles.container}>
        <View style={appStyles.mainContainer}>
          <ViewCountComponent 
            value={this.state.count} 
          />
          <View 
            style={appStyles.buttonContainer}
          >
            <Button
              style={appStyles.counterButton}
              onPress={this.addCount}
              title="Tambah" 
            />
            <Button
              style={appStyles.counterButton}
              onPress={this.subtractCount}
              title="Kurang" 
            />
          </View>
        </View>
      </View>
    );
  }
}

const appStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  mainContainer: {
    height: '30%',
    justifyContent: 'space-evenly',
  }
});