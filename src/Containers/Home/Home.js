import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';

import MyCount from '../../components/Count/CountComponent';
import MyButton from '../../components/Button/ButtonComponent';
import MyTextInput from '../../components/TextInput/TextInputComponent';
import styles from './Home.style';
import { counterIncrement, counterDecrement, setCounter } from '../../actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  _onChangeText = (value) => {
    const counter = value === '' ? 0 : value;
    this.props.setCounter(counter);
  };

  render() {
    const { counter, counterIncrement, counterDecrement } = this.props;
    console.log(this.props);
    return (
        <View style={styles.container}>
          <Image
              style={styles.image}
              source={{ uri: 'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png' }}
          />
          <MyTextInput
              value={counter.toString()}
              placeholder="Input your value"
              onChangeText={this._onChangeText}
          />
          <MyCount value={counter} />
          <View style={styles.buttonContainer}>
            <MyButton
                style={{ flexGrow: 2 }}
                onPress={counterIncrement}
                title="Tambah"
            />
            <MyButton
                style={{ flexGrow: 1 }}
                onPress={counterDecrement}
                title="Kurang"
            />
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = {
  counterIncrement,
  counterDecrement,
  setCounter
};

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
