import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SampleAppMovies from './src/screens/movies';
import DetailsScreen from './src/screens/details';
import HomeScreen from './src/screens/home';
import TabBar from './src/container/tabBar';
import {setAllInfo} from './src/store/actions';

// eslint-disable-next-line no-undef
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Movies: SampleAppMovies,
    // TabBar: TabBar,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      navigationOptions: {
        tabBarLabel: 'Details!',
      },
    },
  },
);
export default createAppContainer(AppNavigator);
// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
