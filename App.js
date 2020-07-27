import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './componenets/AppTabNavigator'
export default function App() {
  return (
    <AppContainer/>
  );
}
const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{screens:WelcomeScreen},
  Drawer:{screens:AppDrawerNavigator}

})
const AppContainer=createAppContainer(switchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
