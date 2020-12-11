import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Genders from '../src/Screens/Genders';
import Movies from '../src/Screens/Movies';
import DetailMovie from '../src/Screens/DetailMovie';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'genders'}>
          <RootStack.Screen name="genders" component={Genders} />
          <RootStack.Screen name="movies" component={Movies} />
          <RootStack.Screen name="detailMovie" component={DetailMovie} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}
