import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

class Word extends Component {
  memorizedWord(){
    this.props.dispatch({
      type:'TOGGLE_MEMORIZED',
      id: this.props.myWord.id
    })
  }
  showWord(){
    this.props.dispatch({
      type:'TOGGLE_SHOW',
      id: this.props.myWord.id
    })
  }
  render() {
      const {en, vn, memorized, isShow} = this.props.myWord
      const textDecorationLine = memorized ? 'line-through' : 'none'
      const memorizedButtonText = memorized ? 'forget' : 'memorized'
      const isShowText = isShow ? 'flex' : 'none'
      const showHide = isShow ? 'hide' : 'show'
    return(
        <View style={styles.container}>
           <Text style={{ textDecorationLine }}>{en}</Text> 
           <Text style={{display:isShowText}}>{vn}</Text>
           <View style={styles.controller}>
             <TouchableOpacity style={styles.button} onPress={()=>this.memorizedWord()}>
                <Text>{memorizedButtonText}</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={()=>this.showWord()}>
               <Text>{showHide}</Text>
             </TouchableOpacity>
           </View>

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
   },
   controller:{
     flexDirection:'row',
     justifyContent:'space-around'
   },
   button:{
     backgroundColor:'white',
     padding:10,
     margin:10
   }
})

