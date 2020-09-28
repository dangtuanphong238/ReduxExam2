import React, {Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

class Word extends Component {
  render() {
      const {en, vn, memorized} = this.props.myWord
      const textDecorationLine = memorized ? 'line-through' : 'none'
    return(
        <View style={styles.container}>
           <Text style={{ textDecorationLine }}>{en}</Text> 
           <Text>{vn}</Text>
        </View>
    )
  }
}
export default connect()(Word)

const styles = StyleSheet.create({
   container:{
       backgroundColor:'#D2DEF6',
       padding:10,
       margin:10
   }
})

