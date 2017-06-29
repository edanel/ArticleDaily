'use strict'
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text, Image} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';
import {StackNavigator, TabNavigator} from 'react-navigation';
const HOME = '首页';
const HOME_NORMAL = require('../../images/tabs/tabs_index_normal.png');
const HOME_FOCUS = require('../../images/tabs/tabs_index_selected.png');

const RANDOM = '随机';
const RANDOM_NORMAL = require('../../images/tabs/tabs_random_normal.png');
const RANDOM_FOCUS = require('../../images/tabs/tabs_random_selected.png');

import DailyScreen from './DailyScreen';
import RandomScreen from './RandomScreen';
import DetailScreen from './DetailScreen';

const TabsNavigator = TabNavigator({
  Home: {
    screen: DailyScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image source={require('../../images/tabs/tabs_index_normal.png')} style={[
        {
          tintColor: tintColor
        },
        styles.icon
      ]}/>)
    }
  },
  Random: {
    screen: RandomScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image source={require('../../images/tabs/tabs_random_normal.png')} style={[
        {
          tintColor: tintColor
        },
        styles.icon
      ]}/>)
    }
  },
}, {
  animationEnabled: false, // 切换页面时不显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 禁止左右滑动
  backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#262626', // 文字和图片选中颜色
    inactiveTintColor: '#999', // 文字和图片默认颜色
    showIcon: true, //显示icon
    showLabel:false,
    indicatorStyle: {
      height: 0
    },
    style: {
      backgroundColor: '#F5F5F5', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 12,
    }
  }
});

const Navigation = StackNavigator({
  Main: {
    screen: TabsNavigator
  },
  Detail: {
    screen: DetailScreen
  }
});

const styles = StyleSheet.create({
  icon: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  }
});

export default Navigation
