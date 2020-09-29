import React, {Component} from 'react';
import { View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header'
class Main extends Component {
  getWordList(){
    const {filterStatus, arrWords} = this.props;
    if(filterStatus === "MEMORIZED") return arrWords.filter(e => e.memorized) // nếu nó bằng true thì đc giữ lại trong mảng
    if(filterStatus === "NEED_PRACTICE") return arrWords.filter(e => !e.memorized) // nếu nó bằng fales thì không giữ lại
    return arrWords

  }
  render() {
    return (
      <View style={{backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch', justifyContent:'center'}}>
        <Header/>
        <View style={{flex:10}}>
          <FlatList
            data={this.getWordList()}
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
