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
  Image,
} from 'react-native';

import MyCount from './src/Count/CountComponent';
import MyButton from './src/Button/ButtonComponent';
import MyTextInput from './src/TextInput/TextInputComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('=>App:Constructor');
    this.state = {
      initial: "",
      count: 0
    };
  }

  componentWillMount() {
    console.log('=>App:ComponentWillMount');
  }

  componentDidMount() {
    console.log('=>App:ComponentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('=>App:ComponentWillReceiveProps');
    console.log('nextProps:', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('=>App:ShouldComponentUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    const { count } = nextState;
    // if (count > 10 || count < -10) {
    //   return false;
    // }
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('=>App:ComponentWillUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
  }

  componentDidUpdate(prevProps, prevState){
    console.log('=>App:ComponentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  componentWillUnmount(){
    console.log('=>App:ComponentWillUnmount');
  }

  onChangeText = (text) => {
    this.setState({
      initial: text,
      count: text ? parseInt(text, 10) : 0,
    });
  }

  addCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }

  subtractCount = () => {
    const { count } = this.state;
    this.setState({
      count: count - 1,
    });
  }

  render() {
    const { count, initial } = this.state;

    console.log('=>App:Render');
    console.log('state.count: ', count);

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png' }}
        />
        <MyTextInput
          value={initial}
          placeholder="Input your value"
          onChangeText={this.onChangeText}
        />
        <MyCount value={count} />
        <View style={styles.buttonContainer}>
          <MyButton
            style={{ flexGrow: 2 }}
            onPress={this.addCount}
            title="Tambah"
          />
          <MyButton
            style={{ flexGrow: 1 }}
            onPress={this.subtractCount}
            title="Kurang"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 200,
    height: 200,
  }
});