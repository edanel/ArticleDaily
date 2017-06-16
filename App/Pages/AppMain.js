'use strict'
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const HOME = '首页';
const HOME_NORMAL = require('../../Images/Tabs/tabs_index_normal.png');
const HOME_FOCUS = require('../../Images/Tabs/tabs_index_selected.png');

const RANDOM = '随机';
const RANDOM_NORMAL = require('../../Images/Tabs/tabs_random_normal.png');
const RANDOM_FOCUS = require('../../Images/Tabs/tabs_random_selected.png');

export default class AppMain extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: HOME
    };
  }

  _renderTabItem(img,selectedImg,tag,childView){
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === tag}
        renderIcon =  {() => <Image style = {styles.tabIcon} source = {img} />}
        renderSelectedIcon= {() => <Image style={styles.tabIcon} source={selectedImg}/>}
        onPress={() => this.setState({selectedTab: tag})}
        // title={tag}
        >
        {childView}
      </TabNavigator.Item>
    );
  }

  _createChildView(tag) {
    if (tag === HOME) {
      return(<View><Text>HOME</Text></View>);
    }else if (tag === RANDOM) {
      return(<View><Text>RANDOM</Text></View>);
    }
  }

  _renderData(){
    return(
      <View style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.title}>每日一文</Text>
        </View>
        <TabNavigator hidesTabTouch={true} style={styles.tab}>
          {this._renderTabItem(HOME_NORMAL,HOME_FOCUS,HOME,this._createChildView(HOME))}
          {this._renderTabItem(RANDOM_NORMAL,RANDOM_FOCUS,RANDOM,this._createChildView(RANDOM))}
        </TabNavigator>
      </View>
    )
  }

  render(){
    return this._renderData();
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 8,
    height:48,
    backgroundColor: '#fff',//顶部导航条颜色
    alignItems: 'center'
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500'
  },
  tab: {
    height: 52,
    backgroundColor: '#f5f5f5',//内容显示块颜色
    alignItems: 'center'
  },
  tabIcon:{
    width:24,
    height:24
  }
})
