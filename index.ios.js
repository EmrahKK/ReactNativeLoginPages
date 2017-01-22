/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/app'

export default class LoginPages extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

AppRegistry.registerComponent('LoginPages', () => LoginPages);
