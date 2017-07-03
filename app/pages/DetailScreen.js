'use strict'
import React, {Component} from 'react';
import {StyleSheet, View, Text,Image,Button,ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HTMLView from 'react-native-htmlview';

export default class DetailScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
  });
  _renderData(){
    const { params } = this.props.navigation.state;
    return (
      <ScrollView>
        <HTMLView value={params.detail} stylesheet={styles} style={{margin:10}}/>

      </ScrollView>
    );
  }

  render(){
    return this._renderData();
  }
}

const styles = StyleSheet.create({
  p:{
    fontWeight: '300',
    fontSize:20,
    // letterSpacing:40,
    lineHeight:40,
    color:'#3F3F3F'
  }

});
