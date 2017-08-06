import React, { Component } from 'react';
import { connect } from 'react-redux';
import { first } from '../actions/index.js'// the action name to be imported
import { bindActionCreators } from 'redux'// to bind the action to redux
//containers have a direct connection to the application state 
//unlike components which are essentially dumb views
var that
import { Text,View,TouchableHighlight} from 'react-native'
class App extends Component{
	helloPressed(){
		console.log("hello pressed");
		that.props.first()
	}
	render(){
		that=this
	return(
		<View>
			 <TouchableHighlight onPress={this.helloPressed}><Text>Hello</Text></TouchableHighlight>
		</View>
		)
	}
}

function mapStateToProps(state){
	//whatever is returned wil show up as props 

}
function mapDispatchToProps(dispatch){
	console.log("mapDispatchToProps"+dispatch)
	return bindActionCreators({first:first},dispatch)
}
export default connect(null,mapDispatchToProps)(App)