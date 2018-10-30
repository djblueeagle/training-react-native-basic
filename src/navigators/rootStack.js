import { createStackNavigator } from 'react-navigation';
import News from '../Containers/News/News'; //Import the component file

const RootStack = createStackNavigator({
    Home: {
      screen: News
    }
  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  });

export default RootStack;
