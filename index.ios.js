/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import OAuthSimple from 'oauthsimple';
import AppNavigator from './app/navigator/AppNavigator';

export default class CoffeeFinder extends Component {
  constructor(props){
    super();
    this.state = {
      position:'unknown',
    }
  }

  render() {
    return (
      <AppNavigator 
        initialRoute={{ident:"Search"}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CoffeeFinder', () => CoffeeFinder);
