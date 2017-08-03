import React, { Component } from 'react';
import { connect } from 'react-redux';
import { action1 } from '../actions/index.js'// the action name to be imported
import { bindActionCreators } from 'redux'// to bind the action to redux
//containers have a direct connection to the application state 
//unlike components which are essentially dumb views
var that
import { Text,View,TouchableHighlight} from 'react-native'
class App extends Component{
	helloPressed(){
		console.log("hello pressed");
		this.props.action1()
	}
	render(){
		that=this
	return(
		<View>
			<Text>Hello</Text>
		</View>
		)
	}
}

function mapStateToProps(state){
	//whatever is returned wil show up as props 

}
function mapDispatchToProps(dispatch){
	console.log("mapDispatchToProps"+dispatch)
	return bindActionCreators({action1:action1},dispatch)
}
export default connect(null,mapDispatchToProps)(App)