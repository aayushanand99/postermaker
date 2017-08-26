import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

var that
export default class Navbar extends Component{
	constructor(props){
		super(props)
	}
	render(){
		that=this
		let leftIcon = (<Icon name={this.props.leftIcon} size={30} color="#fff" style={{alignSelf:'flex-start'}}/>)
		let rightIcon=	(<Icon name={this.props.rightIcon} size={30} color="#fff" style={{alignSelf:'flex-end'}}/>)
		return(
    		 <LinearGradient colors={['#F25A5F', '#EE595D', '#E4565B']} style={{marginTop:20,flex:0.08}}  
			 	start={{ x: 0, y: .25 }}
  				end={{ x: .5, y: 1 }}>
	  			<View style={{backgroundColor:'transparent',flexDirection:'column',justifyContent:'center'}}>
		  			<TouchableOpacity style={styles.leftButtonStyling} onPress={that.props.leftIconFunction}>
		  				{leftIcon}
		  			</TouchableOpacity>
		  			<TouchableOpacity style={{alignSelf:'flex-end',marginTop:-30,paddingRight:10}}>
		  				{rightIcon}
		  			</TouchableOpacity>
				</View>
   			</LinearGradient>
			)
	}
}
const styles=StyleSheet.create({
	leftButtonStyling:{
		alignSelf:'flex-start',
		paddingLeft:10,
		paddingTop:10
	}
})