'use strict'
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import config from '../config';

export default class DailyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
      errorInfo: "",
      dataArray: []
    }
  }
  static navigationOptions = {
    title: '每日一文'
  };

  _fetchData() {
    fetch(REQUEST_DAILY_URL).then((response) => response.json()).then((responseData) => {
      this.setState({dataObject: responseData, isLoading: false});

    }).catch((error) => {
      this.setState({error: true, errorInfo: error})
    }).done();
  }

  componentDidMount() {
    this._fetchData();
  }

  _onRefresh() {
  this.setState({isLoading: true});
  this._fetchData();
  }

  _renderItemView() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView refreshControl={
        <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this._onRefresh.bind(this)}
          />
      }>

        <View style={styles.cardView}>
          <Image style={styles.imageStyle} source={{
            uri: PIC_URL + '?v=' + Math.random()
          }}/>
        </View>

        <View style={styles.viewItem1}>


          <Text style={styles.todayTitle}>{this.state.dataObject.data.title}</Text>
          <Text style={styles.todayAuthor}>{this.state.dataObject.data.author}</Text>

          <Text style={styles.todayDigest}>{this.state.dataObject.data.digest}  ...</Text>

          <View style={styles.readAll}>
            <Text style={styles.readAllText} onPress={() => {
              navigate('Detail',{detail:this.state.dataObject.data.content,
              title:this.state.dataObject.data.title});
            }}>阅读全文</Text>
          </View>
          <Text style={styles.dateText}>{this.state.dataObject.data.date.curr}</Text>
        </View>
      </ScrollView>
    );
  }

  _renderLoadingView() {
    return (<ActivityIndicator animating={this.state.isLoading} style={styles.aiStyle} size="large"/>);
  }
  _renderErrorView() {
    return (
      <View>
        <Text>Eror</Text>
      </View>
    );
  }

  render() {
    if (this.state.isLoading && !this.state.error && typeof(this.state.dataObject) != "undefined") {
      return this._renderItemView();
    }else if (typeof(this.state.dataObject) == "undefined") {
      return this._renderLoadingView();
    }
    else if (this.state.error) {
      return this._renderErrorView();
    }
    return this._renderItemView();
  }
}

const styles = StyleSheet.create({
  viewItem1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  viewItem2: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3F3F3F',
    justifyContent: 'center'
  },
  todatTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  todayTitle: {
    color: '#262626',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  todayAuthor: {
    color: '#3F3F3F',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  todayDigest: {
    color: '#3F3F3F',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8
  },
  imageStyle: {
    resizeMode: 'cover',
    height: 250,
    borderRadius: 5
  },
  cardView: {
    flex: 1,
    elevation: 8,
    backgroundColor: '#F5F5F5',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 5
  },
  readAll: {

    backgroundColor: '#3F3F3F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5
  },
  readAllText: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  dateText: {
    color: '#D0D0D0',
    marginBottom: 10
  },
  placeholderImg: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 5,
    height: 300
  },
  aiStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
