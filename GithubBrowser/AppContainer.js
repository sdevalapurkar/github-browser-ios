'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

var buffer = require('buffer');
var Feed = require('./Feed');
var Search = require('./Search');

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'feed'
    };
  }

  state = {

  };

  render() {
    return (
      <TabBarIOS style = {styles.container}>
        <TabBarIOS.Item
          title = "Feed"
          selected = {this.state.selectedTab == 'feed'}
          icon = {{ uri: "inbox" }}
          onPress = {() => this.setState({
            selectedTab: 'feed'
          })}
        >
          <NavigatorIOS 
            style={{flex: 1}}
            initialRoute={{
              component: Feed,
              title: 'My Activity'
            }}
          >
          </NavigatorIOS>
        </TabBarIOS.Item >

        <TabBarIOS.Item
          title = "Search"
          selected = {this.state.selectedTab == 'search'}
          icon = {{ uri: "search" }}
          onPress = {() => this.setState({
            selectedTab: 'search'
          })}
        >

        <NavigatorIOS
          style={{flex: 1}}
          initialRoute={{
            component: Search,
            title: 'Search Repos'
          }}
        >
        </NavigatorIOS>

        </TabBarIOS.Item >
      </TabBarIOS >
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
});

module.exports = AppContainer;
