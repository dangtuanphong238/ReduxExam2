import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';
class Main extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch'}}>
        <View style={{flex:10}}>
          <FlatList
            data={this.props.arrWords}
            renderItem={({item}) => <Word myWord={item} />}
            // keyExtractor={item => item.renderItem}
          />
        </View>
        <Filter />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    filterStatus: state.filterStatus,
    arrWords: state.arrWords,
  };
}

export default connect(mapStateToProps)(Main);
