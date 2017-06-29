'use strict'
import React, {Component} from 'react';
import {StyleSheet, View, Text,Image,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class RandomScreen extends Component {
  static navigationOptions = {
      title: '随机一文',
    };
  _renderData(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, ArticleDaily App!</Text>

      </View>
    );
  }

  render(){
    return this._renderData();
  }
}
