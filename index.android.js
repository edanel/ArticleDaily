/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';



import AppMain from './App/Pages/AppMain';

export default class ArticleDaily extends Component {
  render() {
    return (<AppMain />);
  }
}

AppRegistry.registerComponent('ArticleDaily', () => ArticleDaily);
