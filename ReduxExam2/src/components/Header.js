import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#d9d9d9',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 10,
          paddingHorizontal:20
        }}>
        <Text />
        <Text>my words</Text>
        <Text>+</Text>
      </View>
    );
  }
}
